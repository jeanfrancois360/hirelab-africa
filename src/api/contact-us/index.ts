import axios from '../../axios';

export const SendMessage = async ({ ...payload }) => {
  return await axios
    .post('/api/mail/contact-us', payload)
    .then((res) => {
      return res.data;
    })
    .catch((error: any) => {
      console.error(error.response?.data?.message);
      throw new Error(error.response?.data?.message);
    });
};
