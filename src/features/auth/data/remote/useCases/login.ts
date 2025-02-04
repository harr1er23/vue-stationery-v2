import router from "@/router";
import AuthApiService from "../authApiServise";
import TokenStorage from "../../local/tokenStorage";

export async function signIn(email: string, password: string) {
    const resp = await AuthApiService.getLogin(email, password);
    
    if(resp.token.length){
        router.push("/");
        TokenStorage.setAccessToken(resp.token);
    }
}