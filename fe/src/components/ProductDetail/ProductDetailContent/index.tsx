import { getElapsedTime } from '@Utils/TimeCounter';

import { ProductDetail } from '@Types/index';

import * as S from './style';

interface ProductDetailContentProps {
  detailData: ProductDetail;
  watchCount: number | undefined;
}
export const ProductDetailContent = ({
  detailData,
  watchCount,
}: ProductDetailContentProps) => (
  <S.Layout>
    <p className="product-detail_title">{detailData.title}</p>
    <span className="product-detail_category">
      {detailData.category}·{getElapsedTime(`${detailData.createdAt}`)}
    </span>
    <div className="product-detail_contents">{detailData.contents}</div>
    <span className="product-detail_conunts">
      채팅{detailData.chatroomCounts} 관심{watchCount} 조회
      {detailData.views}
    </span>
  </S.Layout>
);
