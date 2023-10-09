import { useQuery, UseQueryResult } from '@tanstack/react-query';
import axios, { AxiosResponse } from 'axios';


const baseURL = 'https://ecommerce.routemisr.com';

const fetchPost = async (endPoint : string) => {
  const response: AxiosResponse = await axios.get(`${baseURL}/${endPoint}`);
  return response.data.data;
};

export const useFetch = <T>(endPoint : string): UseQueryResult<T, Error> => {
  return useQuery<T, Error>(['data', endPoint], ()=>fetchPost(endPoint));
};
