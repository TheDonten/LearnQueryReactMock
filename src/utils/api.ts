import axios, { AxiosError } from 'axios'
import { AxiosResponse } from 'axios'


const api = {
    get: <T> (url : string, params? : object) : Promise<AxiosResponse<T, Error>> =>{
      
        return axios.get(url);
    }
}

export default api;