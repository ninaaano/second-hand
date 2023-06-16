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

export type ProductResponseData = {
  statusCode: number;
  message: string;
  data: {
    products: Product[];
  };
};
