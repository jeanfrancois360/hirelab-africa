import axios from '../../axios';
import { IBlogPost } from '../../interfaces';

export const CreateBlogPost = async ({
  ...payload
}): Promise<IBlogPost | undefined> => {
  return await axios
    .post('/api/blog-posts/add', payload, {
      headers: {
        Authorization:
          'Bearer ' + JSON.parse(localStorage.getItem('access_token') || ''),
      },
    })
    .then((res) => {
      return res.data;
    })
    .catch((error: any) => {
      console.error('ERROR =>', error.response?.data?.message);
      throw new Error(error.response?.data?.message);
    });
};

export const GetBlogPosts = async (): Promise<IBlogPost[]> => {
  try {
    const response = await axios.get('/api/blog-posts');
    return response.data;
  } catch (error) {
    throw new Error('Something went wrong.');
  }
};

export const GetBlogPost = async (id: number): Promise<IBlogPost> => {
  return await axios
    .get(`/api/blog-posts/by-uuid/${id}`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.error(error.response?.data?.message);
      throw new Error(error.response?.data?.message);
    });
};

export const UpdateBlogPost = async ({ ...payload }): Promise<IBlogPost> => {
  return await axios
    .patch(`/api/blog-posts/update/${payload.id}`, payload, {
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

export const DeleteBlogPost = async (id: number): Promise<IBlogPost> => {
  return await axios
    .delete(`/api/blog-posts/delete/${id}`, {
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
