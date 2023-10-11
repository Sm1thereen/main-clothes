
export default function authCheck() {
    const stringifiedUser = localStorage.getItem('user');
    if (stringifiedUser == null) {
        return null;
    }
    return JSON.parse(stringifiedUser);
}