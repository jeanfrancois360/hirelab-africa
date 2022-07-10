import axios from '../../axios';
import { IJobApplication } from '../../interfaces';

export const AddJobApplication = async ({
  ...payload
}): Promise<IJobApplication | undefined> => {
  return await axios
    .post('/api/job-applications/apply', payload, {
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

export const GetJobApplications = async (): Promise<IJobApplication[]> => {
  try {
    const response = await axios.get('/api/job-applications');
    return response.data;
  } catch (error) {
    throw new Error('Something went wrong.');
  }
};

export const GetEmployerJobApplications = async (): Promise<
  IJobApplication[]
> => {
  try {
    const response = await axios.get('/api/job-applications/employer', {
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

export const GetCandidateJobApplications = async (): Promise<
  IJobApplication[]
> => {
  try {
    const response = await axios.get('/api/job-applications/candidate', {
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

export const GetJobApplication = async (
  id: number
): Promise<IJobApplication> => {
  return await axios
    .get(`/api/job-applications/${id}`, {
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

export const UpdateJobApplication = async ({
  ...payload
}): Promise<IJobApplication> => {
  return await axios
    .patch(`/api/job-applications/update/${payload.id}`, payload, {
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

export const DeleteJobApplication = async (
  id: number
): Promise<IJobApplication> => {
  return await axios
    .delete(`/api/job-applications/delete/${id}`, {
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
