import axios from 'axios'
// import { getToken } from './utility'

const API_ROOT = 'http://localhost:3061/api';

const client = axios.create({
  baseURL: API_ROOT
})

client.defaults.headers.common = {
  // Authorization: `Bearer ${getToken().accessToken}`
}

export { client }