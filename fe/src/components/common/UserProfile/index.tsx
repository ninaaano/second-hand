import * as S from './style';

interface UserProfileProps {
  children?: React.ReactNode;
  avatar: string;
  username: string;
}

const UserProfile = ({ children, avatar, username }: UserProfileProps) => (
  <S.InfoBox>
    <S.ImgBox>
      <S.UserImg src={avatar} />
    </S.ImgBox>
    <S.NoticeBox>
      <S.UserId>{username} 🥕</S.UserId>
    </S.NoticeBox>
    {children}
  </S.InfoBox>
);

export default UserProfile;
