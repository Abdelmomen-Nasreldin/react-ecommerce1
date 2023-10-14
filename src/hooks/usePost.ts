import axios, { AxiosResponse } from "axios";
import Cookies from "js-cookie";
const baseURL = "https://ecommerce.routemisr.com";

const fetchPost = async (endPoint: string, data: any) => {
    const authToken = Cookies.get("token") as string;
    const response: AxiosResponse = await axios.post(`${baseURL}/${endPoint}`, data, {
        headers: {
            token: authToken,
        },
    });
    console.log(response.data);
    
    return response.data.data;
};
export default fetchPost