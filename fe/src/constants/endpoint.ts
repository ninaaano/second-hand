const BASE_URL = 'http://3.38.73.117:8080';
const CLIENT_ID = 'Iv1.b2c72e9d29d91862';

export const END_POINT = {
  products: `${BASE_URL}/api/products`,
  locations: `${BASE_URL}/api/locations`,
  category: `${BASE_URL}/api/category`,
  sale: `${BASE_URL}/api/product`,
  oAuth: `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}`,
  login: `${BASE_URL}/login`,
  signUp: `${BASE_URL}/signup`,
};
