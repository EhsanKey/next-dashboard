import { APP_CONFIG } from '@/constants/config';
import axios from 'axios';

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || 'https://randomuser.me/api/';

const axiosBase = axios.create({
  baseURL: API_BASE_URL,
  timeout: APP_CONFIG.REQUEST_TIMEOUT,
});

export const getService = axiosBase.get;
export const postService = axiosBase.post;
