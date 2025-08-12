import { requestClient } from '#/api/request';

function fetchHomePagePromotions() {
  return requestClient.get('/promotion/home');
}

export const promotionApi = {
  fetchHomePagePromotions,
};
