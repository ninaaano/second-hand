import * as S from '@Components/NewProduct/NewImg/style';
import Button from '@Components/common/Button';
import { Icon } from '@Components/common/Icon';
import { useEffect, useRef, useState } from 'react';

import { palette } from '@Styles/color';

import { ImgFileTye } from '@Types/index';
export const NewImg = () => {
  const [imgFile, setImgFile] = useState<ImgFileTye[]>([]);
  const [isFullFile, setIsFullFile] = useState(false);
  const [id, setId] = useState(0);

  const fileInput = useRef<HTMLInputElement | null>(null);

  const handleIconClick = () => fileInput.current?.click();
  const imgCount = 10;
  //TODO: 한단계 늦게 setImgFile에 저장됨, 이 부분 수정 필요
  const handleImgFile = () => {
    if (fileInput.current && fileInput.current.files) {
      const files = fileInput.current.files;
      const reader: FileReader = new FileReader();
      if (files && files.length > 0 && imgFile.length < imgCount) {
        reader.readAsDataURL(files[0]);

        reader.onload = async () => {
          if (reader.result) {
            setImgFile((prevState) => [
              ...prevState,
              {
                ImgFileId: id,
                ImgFileName: String(reader.result),
              },
            ]);
            sessionStorage.setItem('saveImgFile', JSON.stringify(imgFile));
          }
          setId(id + 1);
        };
      }
    }
    if (imgFile.length === imgCount - 1) {
      setIsFullFile(true);
    }
  };
  //TODO: 다른 곳에서 똑같은 함수로 많이 사용하기 때문에 함수로 제작하는게 좋음
  const handleOnRemove = (id: number) => {
    setImgFile(imgFile.filter((img) => img.ImgFileId !== id));
    setIsFullFile(false);
  };

  const getImgFile = () => {
    const imgFileData = sessionStorage.getItem('saveImgFile');
    if (imgFileData) {
      setImgFile(JSON.parse(imgFileData));
    }
  };

  useEffect(() => {
    getImgFile();
  }, []);

  return (
    <S.Layout disabled={isFullFile}>
      <div className="saveUploadImg">
        <Icon
          iconType="camera"
          width={23}
          onClick={handleIconClick}
          fill={isFullFile ? palette.orange : palette.black}
        />
        <span>
          {imgFile.length}/{imgCount}
        </span>
      </div>

      <input
        type="file"
        ref={fileInput}
        onChange={handleImgFile}
        style={{ display: 'none' }}
        accept="image/png, image/jpeg"
      />

      <S.ImgBox>
        {imgFile &&
          imgFile.length > 0 &&
          imgFile.map(
            (url, index) =>
              url && (
                <S.CancelImagBox key={url.ImgFileId}>
                  <S.SaveImgBox>
                    <img src={url.ImgFileName} className="uploadImg" />
                    {index === 0 && <S.TextBox>대표 사진</S.TextBox>}
                  </S.SaveImgBox>
                  <S.ButtonBox>
                    <Button
                      buttonType="circle"
                      buttonState="active"
                      size="M"
                      iconType="multiply"
                      onClick={() => handleOnRemove(url.ImgFileId)}
                    />
                  </S.ButtonBox>
                </S.CancelImagBox>
              ),
          )}
      </S.ImgBox>
    </S.Layout>
  );
};
