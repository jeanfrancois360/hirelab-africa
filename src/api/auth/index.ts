import axios from '../../axios';

export const login = async () => {};
export const register = async () => {};
export const logout = async () => {
  localStorage.removeItem('user');
  localStorage.removeItem('access_token');
  window.location.replace('/login');
};

export const checkAuthenticationStatus = async () => {
  return await axios
    .get('/api/auth/status', {
      headers: {
        Authorization:
          'Bearer ' + JSON.parse(localStorage.getItem('access_token') || ''),
      },
    })
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.error(error.response?.data?.message);
      if (error.response?.data?.message === 'Unauthorized') {
        localStorage.removeItem('user');
        localStorage.removeItem('access_token');
        window.location.replace('/login');
      }
    });
};
