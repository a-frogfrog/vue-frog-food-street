import { requestClient } from '#/api/request';

function fetchProductDetails(productId: string) {
  return requestClient.get(`/product/details/${productId}`);
}

function fetchProductList() {
  return requestClient.get('/product/list');
}

export const productApi = {
  fetchProductList,
  fetchProductDetails,
};
