import { getProducts } from '@Apis/product';
import { createContext, useContext } from 'react';
import useFetch from '@Hooks/useFetch';
import { IGetHomeProducts } from '@Types/homeProducts';
import { Product, ProductResponseData, apiStutus } from '@Types/index';

interface HomeProductsContextProps {
  homeProductList: Product[] | undefined;
  homeProductsApiStatus: apiStutus;
  getHomeProducts: ({ page, size, locationId }: IGetHomeProducts) => void;
  errorMessage: string | null;
}

interface HomeProductsProviderProps {
  children: React.ReactNode;
}

export const homeProductsContext =
  createContext<HomeProductsContextProps | null>(null);

export const HomeProductsProvider = ({
  children,
}: HomeProductsProviderProps) => {
  const {
    data: homeProductData,
    status: homeProductsApiStatus,
    fetch,
    errorMessage,
  } = useFetch<ProductResponseData>({
    suspense: true,
  });
  const homeProductList = homeProductData?.data.products;

  const getHomeProducts = ({
    page = 0,
    size = 10,
    locationId,
  }: IGetHomeProducts) => {
    fetch({
      fetchFn: () =>
        getProducts({
          page,
          size,
          locationId,
        }),
    });
  };

  return (
    <homeProductsContext.Provider
      value={{
        homeProductList,
        homeProductsApiStatus,
        getHomeProducts,
        errorMessage,
      }}
    >
      {children}
    </homeProductsContext.Provider>
  );
};

export const useHomeProductsContext = () => {
  const context = useContext(homeProductsContext);

  if (!context) {
    throw new Error(
      'useHomeProductsContext should be used within homeProductsContextProvider',
    );
  }

  return context;
};
