import axios from 'axios';
import Cookies from 'js-cookie';
import getConfig from 'next/config';
const TOKEN = typeof window !== 'undefined' ? Cookies.get('token') : '';

const { publicRuntimeConfig } = getConfig();
const BASE_URL = publicRuntimeConfig.BASE_URL;
const instance = axios.create({
    baseURL: BASE_URL,
    headers: { Authorization: `Bearer ${TOKEN}` },
});

export default instance;
