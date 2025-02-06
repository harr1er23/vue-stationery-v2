import CategoryModel from "../models/CategoryModel";
import axiosInstance from "@/core/network/axiosInstance";

export default class CategoriesApiService {
    async getCategories(): Promise<CategoryModel[]> {
        const resp = await axiosInstance.get(`${import.meta.env.VITE_MOKKY_URL}/categories`);

        if(resp.status === 200) {
            return resp.data.map((category: any) => new CategoryModel(category));
        }else {
            throw Error('Не удалось получить категории!')
        }
    }
}