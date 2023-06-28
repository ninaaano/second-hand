export type tabBarList = 'home' | 'sales' | 'heart' | 'chat' | 'account';
export type Product = {
  productId: number;
  title: string;
  price: number;
  createdAt: string;
  status: string;
  location: {
    locationId: number;
    district: string;
    city: string;
    town: string;
  };
  watchlistCounts: number;
  chatroomCounts: number;
  mainImage: {
    productImageId: number;
    imageUrl: string;
  };
};

export type CategoryType = {
  categoryId: number;
  categoryName: string;
};

export type ProductResponseData = {
  statusCode: number;
  message: string;
  data: {
    products: Product[];
  };
};

export type LocationData = {
  locationId: number;
  district: string;
  city: string;
  town: string;
};

export type User = {
  userId: number;
  avatar: string;
  username: string;
  primaryLocation?: LocationData;
};

export type UserContextProps = {
  user: User | undefined;
  setUserInfo: (userInfo: User) => void;
};

export type CategoryResponseData = {
  statusCode: number;
  message: string;
  data: {
    category: CategoryType[];
  };
};

export type SaleResponseData = {
  title: string;
  price: number;
  contents: string;
  productImages: string[];
  categoryId: number;
  locationId: number;
};

export type ImgFileType = {
  ImgFileId: number;
  ImgFileName: string;
};

export type ProductDetailResponseData = {
  statusCode: number;
  message: string;
  data: ProductDetail;
};

export type ProductDetail = {
  productId: number;
  sellerId: string;
  title: string;
  contents: string;
  price: number;
  createdAt: string;
  status: string;
  watchlistCounts: number;
  chatroomCounts: number;
  images: ProductDetailImg[];
  category: string;
  views: number;
};

export type ProductDetailImg = {
  productImageId: number;
  imageUrl: string;
};
