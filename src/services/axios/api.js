import { client } from './apiConfig'

const customerAllAPI = () => {
  return client.get("/customer/list")
}
