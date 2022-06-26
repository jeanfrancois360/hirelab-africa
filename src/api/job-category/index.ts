import axios from '../../axios';
import { IJobCategory } from '../../interfaces';

export const CreateJobCategory = async ({
  ...payload
}): Promise<IJobCategory | undefined> => {
  return await axios
    .post('/job-categories/add', payload, {
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

export const GetJobCategories = async (): Promise<IJobCategory[]> => {
  try {
    const response = await axios.get('/job-categories', {
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

export const GetJobCategory = async ({ ...payload }) => {};

export const UpdateJobCategory = async ({
  ...payload
}): Promise<IJobCategory> => {
  return await axios
    .patch(`job-categories/update/${payload.id}`, payload, {
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

export const DeleteJobCategory = async (id: number): Promise<IJobCategory> => {
  return await axios
    .delete(`job-categories/delete/${id}`, {
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
