import axios from 'axios'
import store from '../store'

function dealWithTokenResp (res) {
  const { config } = res
  if (/token/.test(config.url)) {
    if (res.data.error) {
      return Promise.reject(res.data.error)
    }
    return res.data
  }
  return res.data.data
}

function retryTimeout () {

}

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

service.interceptors.request.use(
  config => {
    console.log(store.state.Login.accessToken)
    if (store.state.Login.accessToken) {
      config.headers['Authorization'] = 'Bearer ' + store.state.Login.accessToken
    }
    // Do something before request is sent
    // if (store.getters.token) {
    //   // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
    //   config.headers['X-Token'] = getToken()
    // }
    return config
  },
  error => {
    console.log(error) // for debug
    Promise.reject(error)
  })

service.interceptors.response.use(
  res => {
    return dealWithTokenResp(res)
  },
  error => {
    console.log('err' + error)
    retryTimeout()
  }
)

export default service
