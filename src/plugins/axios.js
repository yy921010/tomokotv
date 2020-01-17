import axios from 'axios'

export default {
  install (Vue, opt = {}) {
    console.log(opt.baseURL)
    const service = axios.create(opt)
    // request interceptor
    service.interceptors.request.use(
      config => {
        // Do something before request is sent
        // if (store.getters.token) {
        //   // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
        //   config.headers['X-Token'] = getToken()
        // }
        return config
      },
      error => {
        // Do something with request error
        console.log(error) // for debug
        Promise.reject(error)
      }
    )

    service.interceptors.response.use(
      res => {
        console.log(res.data)
        return res.data.data
      },
      err => {
        console.log('err' + err)
        return Promise.reject(err)
      })

    Vue.prototype.$http = service
  }
}
