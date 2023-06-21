import Button from '@Components/common/Button';

import * as S from './style';

const Login = () => {
  const githubURL =
    'https://github.com/login/oauth/authorize?client_id=Iv1.b2c72e9d29d91862';

  const gitHubLoginHandler = () => {
    window.location.href = githubURL;
  };

  return (
    <>
      <S.LoginButtonBox>
        <Button
          buttonType="rectangle"
          buttonState="active"
          size="L"
          title="Github 로그인"
          iconType="githubLogo"
          onClick={gitHubLoginHandler}
        />
      </S.LoginButtonBox>
    </>
  );
};

export default Login;
