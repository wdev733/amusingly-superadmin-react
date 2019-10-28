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

const addCustomerAPI = (customer) => {
  
  return client.post("/api/customer/add", customer)
}

const editCustomerAPI = (customer) => {

  return client.post("/api/customer/edit", customer)
}

export { 
  loginAPI, 
  customerListAPI,
  customerOneAPI,
  instaImageListByCustomerAPI ,
  suspendCustomerAPI,
  addCustomerAPI,
  editCustomerAPI
}
