import { getProducts } from '@Apis/productApi';
import { createContext, useContext, useEffect, useState } from 'react';
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
  const [homeProductList, setHomeProductList] = useState<Product[]>();
  const {
    data: homeProductData,
    status: homeProductsApiStatus,
    errorMessage,
    fetch,
  } = useFetch<ProductResponseData>();

  const getHomeProducts = ({
    page = 0,
    size = 10,
    locationId,
  }: IGetHomeProducts) => {
    fetch({
      callback: () =>
        getProducts({
          page,
          size,
          locationId,
        }),
    });
  };

  useEffect(() => {
    if (homeProductData) {
      setHomeProductList(homeProductData.data.products);
    }
  }, [homeProductData]);

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
