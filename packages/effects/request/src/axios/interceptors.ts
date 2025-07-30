import { AxiosResponse } from 'axios';

export const handleResponse = (response: AxiosResponse) => {
  return { ...response.data, isSucceed: true };
};

export const handleResponseError = (error: any) => {
  // TODO: handle error
  return Promise.reject(error);
};

export const handleRequest = (config: any) => {
  return config;
};

export const handleRequestError = (error: any) => {
  // TODO: handle error
  return Promise.reject(error);
};
