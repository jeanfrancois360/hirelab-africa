import axios from '../../axios';
import { IJobPost } from '../../interfaces';

export const CreateJobPost = async ({
  ...payload
}): Promise<IJobPost | undefined> => {
  return await axios
    .post('/job-posts/add', payload, {
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

export const GetJobPosts = async (): Promise<IJobPost[]> => {
  try {
    const response = await axios.get('/job-posts', {
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

export const GetJobPost = async ({ ...payload }) => {};

export const UpdateJobPost = async ({ ...payload }): Promise<IJobPost> => {
  return await axios
    .patch(`job-posts/update/${payload.id}`, payload, {
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

export const DeleteJobPost = async (id: number): Promise<IJobPost> => {
  return await axios
    .delete(`job-posts/delete/${id}`, {
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
