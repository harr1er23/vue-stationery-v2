import type { AxiosInstance } from "axios";
import ApiService from "@/core/network/services/ApiService";
import CategoryModel from "../models/CategoryModel";

export default class CategoriesApiService extends ApiService {
    constructor(axios:AxiosInstance){ super(axios); }
    async getCategories(): Promise<CategoryModel[]> {
        const resp = await this.axios.get('/Api/getMenuItems');

        return resp.data.map((category: any) => new CategoryModel(category));
    }
}