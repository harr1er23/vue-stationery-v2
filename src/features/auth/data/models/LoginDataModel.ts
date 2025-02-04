import type { LoginData } from "../../domain/entities/LoginData";

export default class LoginDataModel {
    token: string;
    data: LoginData;

    constructor(data: any) {
        this.token = data.token;
        this.data = data.data;
    }
}