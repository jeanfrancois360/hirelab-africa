export const logout = async () => {
    localStorage.removeItem('user');
    localStorage.removeItem('access_token');
    window.location.replace("/login");
}