import * as S from '@Components/NewProduct/NewImg/style';
import Button from '@Components/common/Button';
import { Icon } from '@Components/common/Icon';
import { useRef, useState } from 'react';
export const NewImg = () => {
  const [imgFile, setImgFile] = useState<string[]>([]);

  const fileInput = useRef<HTMLInputElement | null>(null);

  const handleIconClick = () => fileInput.current?.click();

  const handleImgFile = () => {
    if (fileInput.current && fileInput.current.files) {
      const files = fileInput.current.files;
      const reader: FileReader = new FileReader();
      if (files && files.length > 0 && files.length <= 4) {
        reader.readAsDataURL(files[0]);

        reader.onload = () => {
          if (reader.result) {
            setImgFile((prevState) => [...prevState, String(reader.result)]);
          }
        };
      }
    }
  };

  const handleOnRemove = (url: string) => {
    setImgFile(imgFile.filter((img) => img !== url));
  };

  return (
    <S.Layout>
      <div className="saveUploadImg">
        <Icon iconType="camera" width={23} onClick={handleIconClick} />
        <span>{imgFile.length}/10</span>
        <input
          type="file"
          ref={fileInput}
          onChange={handleImgFile}
          style={{ display: 'none' }}
          accept="image/png, image/jpeg"
        />
      </div>
      {imgFile &&
        imgFile.length > 0 &&
        imgFile.map(
          (url, index) =>
            url && (
              <S.CancelImagBox key={index}>
                <S.SaveImgBox>
                  <img src={url} className="uploadImg" />
                  <S.TextBox>대표 사진</S.TextBox>
                </S.SaveImgBox>
                <S.ButtonBox>
                  <Button
                    buttonType="circle"
                    buttonState="active"
                    size="M"
                    iconType="multiply"
                    onClick={() => handleOnRemove(url)}
                  />
                </S.ButtonBox>
              </S.CancelImagBox>
            ),
        )}
    </S.Layout>
  );
};
