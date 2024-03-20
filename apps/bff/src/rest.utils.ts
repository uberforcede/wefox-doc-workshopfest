import { HttpService } from '@nestjs/axios';
import { Logger } from '@nestjs/common';
import { AxiosResponse } from 'axios';

const logger = new Logger('Utils');

export const getRequest = async (
  service: HttpService,
  url: string,
): Promise<AxiosResponse> => {
  logger.log(`Retrieve data from ${url}`);
  const config = {
    headers: {
      accept: 'Application/json',
      Prefer: 'dynamic=true',
    },
  };
  return service.axiosRef
    .get(url, config)
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(
        err?.message + ': ' + JSON.stringify(err?.response?.data),
      );
    });
};

export const postRequest = async (
  service: HttpService,
  url: string,
  data,
): Promise<AxiosResponse> => {
  logger.log(`Post data to ${url}`);
  const config = {
    headers: {
      accept: 'Application/json',
      Prefer: 'dynamic=true',
    },
  };
  return service.axiosRef
    .post(url, data, config)
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(
        err?.message + ': ' + JSON.stringify(err?.response?.data),
      );
    });
};
