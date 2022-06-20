import axios from 'axios';

// Development
const instance = axios.create({ baseURL: 'http://localhost:3001' });

// Production
//const instance = axios.create({ baseURL: 'https://hirelabafrican.com' });

export default instance;
