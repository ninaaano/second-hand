import { ProductDetail } from '@Types/index';

import * as S from './style';
interface ProductDetailContentProps {
  detailData: ProductDetail;
}
export const ProductDetailImg = ({ detailData }: ProductDetailContentProps) => (
  <S.Layout>
    <S.ImgListBox>
      {detailData.images.map((img) => (
        <S.ImgBox
          key={img.productImageId}
          className={`item-img_${img.productImageId}`}
        >
          <img src={img.imageUrl} />
        </S.ImgBox>
      ))}
    </S.ImgListBox>
  </S.Layout>
);
