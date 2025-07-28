import {
  AxiosError,
  AxiosHeaders,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';

export const responseSuccessHandler = (response: AxiosResponse) => {
  return Promise.resolve(response.data);
};

export const responseErrorHandler = (error: AxiosError) => {
  return Promise.reject(error);
};

export const requestHandler = (config: InternalAxiosRequestConfig) => {
  if (!config.headers) {
    config.headers = new AxiosHeaders();
  }
  return config;
};

export const requestErrorHandler = (error: AxiosError) => {
  return Promise.reject(error);
};
