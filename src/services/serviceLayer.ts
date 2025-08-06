import { AxiosRequestConfig } from 'axios';
import { getService } from './axios';

interface GetArguments {
  url: string;
  params?: object;
  config?: AxiosRequestConfig;
}

function getRequest<T>({ url, config, params }: GetArguments): Promise<T> {
  return new Promise((resolve, reject) => {
    getService(url, {
      params,
      ...config,
    })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export { getRequest };
