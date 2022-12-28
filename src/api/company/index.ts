import axios from '../../axios';
import { ICompany } from '../../interfaces';

export const AddCompany = async ({
  ...payload
}): Promise<ICompany | undefined> => {
  return await axios
    .post('/auth/signup', payload, {
      headers: {
        Authorization:
          'Bearer ' + JSON.parse(localStorage.getItem('access_token') || ''),
      },
    })
    .then((res) => {
      return res.data;
    })
    .catch((error: any) => {
      console.error(error.response?.data?.message);
      throw new Error(error.response?.data?.message);
    });
};

export const GetCompanies = async () => {
  try {
    const response = await axios.get(`/users/search-role/${'Employer'}`);
    return response.data;
  } catch (error) {
    throw new Error('Something went wrong.');
  }
};

export const GetCompany = async ({ ...payload }) => {};

export const UpdateCompany = async ({ ...payload }): Promise<ICompany> => {
  console.log(payload);
  return await axios
    .patch(`/profiles/update/${payload.id}`, payload, {
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
      throw new Error(error.response?.data?.message);
    });
};

export const DeleteCompany = async (id: number): Promise<ICompany> => {
  return await axios
    .delete(`/users/delete/${id}`, {
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
      throw new Error(error.response?.data?.message);
    });
};
