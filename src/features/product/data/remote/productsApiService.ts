import axiosInstance from "@/core/network/axiosInstance";
import ProductModel from "../models/ProductModel";

export default class ProductsApiService {
    static async getProducts(): Promise<ProductModel[]> {
        const response = await axiosInstance.get(`${import.meta.env.VITE_MOKKY_URL}/products`);

        const items = response.data;
        if(!Array.isArray(items)) return [];
        return items.map((obj) => new ProductModel(obj))
    }

    static async getProductInfo(productId: number) {
        const response = await axiosInstance.get(`${import.meta.env.VITE_MOKKY_URL}/products?id=${productId}`);
    }
}