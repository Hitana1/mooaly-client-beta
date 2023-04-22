export class LocalStorage {
    // Access token
    static getAccessToken() {
        return localStorage.getItem("access-token");
    }
    static setAccessToken(accessToken: string) {
        return localStorage.setItem("access-token", accessToken);
    }
    static removeAccessToken() {
        return localStorage.removeItem("access-token");
    }
}
