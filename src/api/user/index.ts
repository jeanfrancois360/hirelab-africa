import axios from '../../axios';
import { IUser } from '../../interfaces';

export const GetUsers = async (): Promise<IUser[]> => {
  try {
    const response = await axios.get('/users', {
      headers: {
        Authorization:
          'Bearer ' + JSON.parse(localStorage.getItem('access_token') || ''),
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('Something went wrong.');
  }
};

export const GetUser = async (id: number): Promise<IUser> => {
  return await axios
    .get(`/users/${id}`, {
      headers: {
        Authorization:
          'Bearer ' + JSON.parse(localStorage.getItem('access_token') || ''),
      },
    })
    .then((res) => {
      localStorage.setItem(
        'user',
        JSON.stringify({
          id: res.data.id,
          email: res.data.email,
          cv: res.data.cv,
          profile: res.data.profile,
          role: res.data.role,
        })
      );
      return res.data;
    })
    .catch((error) => {
      console.error(error.response?.data?.message);
      throw new Error(error.response?.data?.message);
    });
};
