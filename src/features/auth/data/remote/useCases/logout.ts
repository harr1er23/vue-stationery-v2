import router from "@/router";
import TokenStorage from "../../local/tokenStorage";

export function logout() {
    TokenStorage.clearAccessToken();
    router.push('/auth')
}