import { useQuery, UseQueryResult } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import Cookies from "js-cookie";

const baseURL = "https://ecommerce.routemisr.com";
const fetchPost = async (endPoint: string) => {
    const authToken = Cookies.get("token") as string;
    const response: AxiosResponse = await axios.get(`${baseURL}/${endPoint}`, {
        headers: {
            token: authToken,
        },
    });
    console.log(response.data);
    
    return response.data.data;
};

export const useFetch = <T>(endPoint: string): UseQueryResult<T, Error> => {
    return useQuery<T, Error>(["data", endPoint], () => fetchPost(endPoint));
};
