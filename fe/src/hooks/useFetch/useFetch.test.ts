import { renderHook } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import { ERROR_MESSAGE } from '@Constants/index';

import useFetch from '.';

describe('useFetch 커스텀 훅은', () => {
  const mockFetch = jest.spyOn(global, 'fetch');

  // TODO(덴): 임시로 구현한 renderHook의 waitForNextUpdate 함수(타입오류 해결 실패) 해결방안 고민후 해결 필요.
  // ? 2주차 해결 실패.......
  const waitForNextUpdate = async () => {
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });
  };

  it('페치 후에 데이터를 성공적으로 가져오고 상태를 업데이트해야 한다', async () => {
    const url = 'http://localhost.com/api/products';

    const responseData = {
      title: '청소기',
      price: 10000,
    };

    mockFetch.mockResolvedValueOnce(
      Promise.resolve(
        new Response(JSON.stringify(responseData), {
          status: 200,
          headers: { 'Content-type': 'application/json' },
        }),
      ),
    );

    const { result } = renderHook(() => useFetch(url));

    expect(result.current.status).toBe('loading');

    await waitForNextUpdate();

    expect(result.current.status).toBe('success');
    expect(result.current.errorMessage).toBe(null);
    expect(result.current.data).toStrictEqual(responseData);
  });

  it('잘못된 요청 형식(400)으로 페치하면 데이터를 가져오는데 실패하고 상태를 업데이트해야 한다', async () => {
    const url = 'http://localhost.com/api/products';

    mockFetch.mockResolvedValueOnce(
      Promise.resolve(
        new Response(JSON.stringify(undefined), {
          status: 400,
          headers: { 'Content-type': 'application/json' },
        }),
      ),
    );

    const { result } = renderHook(() => useFetch(url));

    await waitForNextUpdate();

    expect(result.current.status).toBe('error');
    expect(result.current.errorMessage).toBe(ERROR_MESSAGE[400]);
    expect(result.current.data).toStrictEqual({});
  });
});
