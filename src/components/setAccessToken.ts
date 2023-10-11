
export default function setAccessToken(userData: any) {

    if (userData && userData.accessToken) {
        const { accessToken, refreshToken } = userData.accessToken;
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
        console.log('AccessToken:', accessToken);
        console.log('RefreshToke:', refreshToken);
    }
    const { user } = userData;
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('accessToken', JSON.stringify(userData.accessToken));

}