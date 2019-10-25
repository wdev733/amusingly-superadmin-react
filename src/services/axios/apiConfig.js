import axios from "axios"
import { getToken } from "./utility"
import { serverUrl } from "Constants/defaultValues"
// import dotenv from "dotenv"

// const API_ROOT = process.env.REACT_APP_BACKEND_BASE_URL
// const API_ROOT = "http://localhost:3061";
// const API_ROOT = "http://3.19.58.151:3061/";

const client = axios.create({
  baseURL: serverUrl
})

client.defaults.headers.common = {
  Authorization: `Bearer ${getToken().accessToken}`
}

export { client }
