import { setupWorker } from 'msw';
import { mockAPIHandler } from './mockAPIHandler';

// Service Worker 생성 : 작성한 handler 코드를 setupWorker() 함수의 인자로 넘겨준다.
// Setup requests interception using the given handlers.
export const worker = setupWorker(...mockAPIHandler);
