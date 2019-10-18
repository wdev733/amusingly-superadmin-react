import { client } from './apiConfig'

const loginAPI = (username, password) => {

  return client.post("/api/account/login", {
    username: username,
    password: password
  })
}

const productAllAPI = () => {

  return client.get("/v1/product/")
}

export {loginAPI}