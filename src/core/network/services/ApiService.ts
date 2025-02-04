import { AxiosInstance } from "axios";

export default abstract class ApiService{
    protected axios:AxiosInstance;
    constructor(axios:AxiosInstance){
        this.axios = axios;
    }
}