export default class TokenStorage {
    static getAccessToken() {
        return localStorage.getItem('access_token');
    }

    static setAccessToken(accessToken: string) {
        localStorage.setItem('access_token', accessToken);
    }

    static clearAccessToken() {
        localStorage.removeItem('access_token');
    }
}