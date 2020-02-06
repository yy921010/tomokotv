import Axios from 'axios'
import Store from '../store'

let responseHandle = (res) => {
  const { config } = res
  if (/token/.test(config.url)) {
    if (res.data.error) {
      return Promise.reject(res.data.error)
    }
    return res.data
  } else {
    return res.data.data
  }
}

const service = Axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

service.interceptors.request.use(
  config => {
    if (Store.state.Login.accessToken) {
      config.headers['Authorization'] = 'Bearer ' + Store.state.Login.accessToken
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
    return responseHandle(res)
  },
  error => {
    console.log('err' + error)
  }
)

export default service
