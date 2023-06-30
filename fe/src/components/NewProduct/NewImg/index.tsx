import * as S from '@Components/NewProduct/NewImg/style';
import Button from '@Components/common/Button';
import { Icon } from '@Components/common/Icon';
import { useEffect, useRef, useState } from 'react';

import { palette } from '@Styles/color';

interface ImgProps {
  originFile: React.Dispatch<React.SetStateAction<File[]>>;
  originFileValue: File[];
}

export const NewImg = ({ originFile, originFileValue }: ImgProps) => {
  const [imgFile, setImgFile] = useState<string[]>([]);
  const [isFullFile, setIsFullFile] = useState(false);
  const fileInput = useRef<HTMLInputElement | null>(null);

  const handleIconClick = () => fileInput.current?.click();
  const imgCount = 10;

  const handleImgFile = () => {
    if (fileInput.current && fileInput.current.files) {
      const files = fileInput.current.files;
      const reader: FileReader = new FileReader();

      if (files && files.length > 0 && imgFile.length < imgCount) {
        reader.readAsDataURL(files[0]);
        reader.onload = () => {
          if (reader.result) {
            originFile((prevData) => [...prevData, files[0]]);
            setImgFile((prevState) => [...prevState, String(reader.result)]);
          }
        };
      }
    }
    if (imgFile.length === imgCount - 1) {
      setIsFullFile(true);
    }
  };

  const handleOnRemove = (id: number) => {
    const removeId = imgFile.filter((_, index) => index !== id);
    const removeOrigin = originFileValue.filter((_, index) => index !== id);
    setImgFile(removeId);
    originFile(removeOrigin);
    setIsFullFile(false);
  };

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
        multiple
      />

      <S.ImgBox>
        {imgFile &&
          imgFile.length > 0 &&
          imgFile.map(
            (url, id) =>
              url && (
                <S.CancelImagBox key={id}>
                  <S.SaveImgBox>
                    <img src={url} className="uploadImg" />
                    {id === 0 && <S.TextBox>대표 사진</S.TextBox>}
                  </S.SaveImgBox>
                  <S.ButtonBox>
                    <Button
                      buttonType="circle"
                      buttonState="active"
                      size="M"
                      iconType="multiply"
                      onClick={() => handleOnRemove(id)}
                    />
                  </S.ButtonBox>
                </S.CancelImagBox>
              ),
          )}
      </S.ImgBox>
    </S.Layout>
  );
};
