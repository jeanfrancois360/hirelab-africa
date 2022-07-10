import axios from '../../axios';
import { IBlogCategory } from '../../interfaces';

export const CreateBlogCategory = async ({
  ...payload
}): Promise<IBlogCategory | undefined> => {
  return await axios
    .post('/blog-categories/add', payload, {
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

export const GetBlogCategories = async (): Promise<IBlogCategory[]> => {
  try {
    const response = await axios.get('/blog-categories');
    return response.data;
  } catch (error) {
    throw new Error('Something went wrong.');
  }
};

export const GetBlogCategory = async ({ ...payload }) => {};

export const UpdateBlogCategory = async ({
  ...payload
}): Promise<IBlogCategory> => {
  return await axios
    .patch(`/blog-categories/update/${payload.id}`, payload, {
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

export const DeleteBlogCategory = async (
  id: number
): Promise<IBlogCategory> => {
  return await axios
    .delete(`/blog-categories/delete/${id}`, {
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
