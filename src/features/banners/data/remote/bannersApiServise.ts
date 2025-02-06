import axiosInstance from "@/core/network/axiosInstance";
import BannerModel from "../models/BannerModel";

export default class bannersApiService {
    static async getBanners():Promise<BannerModel[]>{
        const url = `${import.meta.env.VITE_MOKKY_URL}/stoks`;

        const resp = await axiosInstance.get(url);

        return resp.data.map((obj: BannerModel) => new BannerModel(obj));
    }
}