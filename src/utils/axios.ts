import Axios from 'axios'

import { ElMessage } from 'element-plus'

// const baseURL = 'https:/api.github.com'
const baseURL = 'http://dashen-api.9tech.cn/'

const axios = Axios.create({
  baseURL,
  timeout: 2000,
})

axios.interceptors.request.use((config)=>{
  return config
}, error => {
  return Promise.reject(error)  
})

axios.interceptors.response.use((response)=>{
  return response
}, error => {
  if (error.response && error.response.data) {
    const code = error.response.status
    const msg = error.response.data.message
    ElMessage.error(`Code: ${code},Message: ${msg}`)
  } else {
    ElMessage.error(`${error}`)
  }
  return Promise.reject(error)
})

export default axios

