import axios from "axios";
import LoginDataModel from "../models/LoginDataModel";

export default class AuthApiService {
    static async getLogin(email: string, password: string) {
        const url = `${import.meta.env.VITE_MOKKY_URL}/auth`;

        const { data } = await axios.post(url, {
            email,
            password
        })

        return new LoginDataModel(data);
    }
}