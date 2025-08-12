import axios from 'axios';

class RequestClient<R = unknown> {
  private instance = axios.create();
  public isSucceed: (response: R) => boolean;

  constructor(baseURL: string) {
    this.instance = axios.create({
      baseURL,
    });
    // 初始化请求
  }

  get(url: string, params?: {}): Promise<R> {
    // 发送 GET 请求
    return this.instance.request({
      url,
      method: 'GET',
      params,
    });
  }

  post(url: string, data?: {}): Promise<R> {
    // 发送 POST 请求
    return this.instance.request({
      url,
      method: 'POST',
      data,
    });
  }

  put(url: string, data?: {}): Promise<R> {
    // 发送 PUT 请求
    return this.instance.request({
      url,
      method: 'PUT',
      data,
    });
  }

  delete(url: string, data?: {}): Promise<R> {
    // 发送 DELETE 请求
    return this.instance.request({
      url,
      method: 'DELETE',
      data,
    });
  }
}

export default RequestClient;
