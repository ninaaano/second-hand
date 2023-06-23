export const END_POINT = {
  products: `${process.env.REACT_APP_BASE_URL}/api/products`,
  locations: `${process.env.REACT_APP_BASE_URL}/api/locations`,
  category: `${process.env.REACT_APP_BASE_URL}/api/category`,
  sale: `${process.env.REACT_APP_BASE_URL}/api/product`,
  oAuth: `https://github.com/login/oauth/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}`,
  login: `${process.env.REACT_APP_BASE_URL}/api/login`,
  signUp: `${process.env.REACT_APP_BASE_URL}/api/signup`,
};
