import axios from 'axios';
import { ApiUrl } from './constants';

// Development
const instance = axios.create({ baseURL: ApiUrl });

// Production
//const instance = axios.create({ baseURL: 'https://hirelabafrican.com' });

export default instance;
