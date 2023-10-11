
export default function authHeader() {
    const stringifiedAccessToken = localStorage.getItem('accessToken');
    if (stringifiedAccessToken == null) {
        return {};
    }

    const accessToken = JSON.parse(stringifiedAccessToken);

    if (accessToken?.accessToken) {
        return { Authorization: 'Bearer ' + accessToken.accessToken }
    }
    return {};
}
