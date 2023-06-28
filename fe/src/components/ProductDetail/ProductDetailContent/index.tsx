import { getElapsedTime } from '@Utils/TimeCounter';

import { ProductDetail } from '@Types/index';

import * as S from './style';

interface ProductDetailContentProps {
  detailData: ProductDetail;
}
export const ProductDetailContent = ({
  detailData,
}: ProductDetailContentProps) => (
  <S.Layout>
    <p className="product-detail_title">{detailData.title}</p>
    <span className="product-detail_category">
      {detailData.category}·{getElapsedTime(`${detailData.createdAt}`)}
    </span>
    <div className="product-detail_contents">{detailData.contents}</div>
    <span className="product-detail_conunts">
      채팅{detailData.chatroomCounts} 관심{detailData.watchlistCounts} 조회
      {detailData.views}
    </span>
  </S.Layout>
);
