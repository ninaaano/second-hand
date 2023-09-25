import { END_POINT } from '@Constants/endpoint';
import { IGetHomeProducts } from '@Types/homeProducts';
import { persistentStorage } from '../App';

export const getProducts = async ({
  page = 0,
  size = 10,
  locationId,
}: IGetHomeProducts) =>
  await fetch(
    `${END_POINT.products}?page=${page}&size=${size}&locationId=${locationId}`,
    {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + persistentStorage.get(),
        'Content-Type': 'application/json',
      },
    },
  );

export const getProductDetail = async (productId: number) =>
  await fetch(`${END_POINT.products}/${productId}`, {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + persistentStorage.get(),
      'Content-Type': 'application/json',
    },
  });

export const postNewProduct = async (body: FormData) =>
  await fetch(`${END_POINT.products}`, {
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + persistentStorage.get(),
      'Content-Type': 'multipart/form-data',
    },
    body,
  });
