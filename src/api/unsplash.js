import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID kt5hVqznarFrOsY4qirf92s-sDdkN1LroNtjZ9DFaSU',
  },
});
