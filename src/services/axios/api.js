import { client } from './apiConfig'

const loginAPI = (username, password) => {
  return client.post("/api/account/login", {
    username: username,
    password: password
  })
}

const customerListAPI = () => {
  return client.get("/api/customer/list")
}

const customerOneAPI = (customerId) => {
  return client.get("/api/customer/c/" + customerId)
}

const instaImageListByCustomerAPI = (customerId) => {
  return client.get("/api/customer/insta_list/" + customerId)
}

const suspendCustomerAPI = (customerId, status) => {
    
  return client.post("/api/customer/status", {
    customer: customerId,
    status: status
  })
}

export { 
  loginAPI, 
  customerListAPI,
  customerOneAPI,
  instaImageListByCustomerAPI ,
  suspendCustomerAPI
}
