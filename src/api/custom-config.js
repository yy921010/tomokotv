import HttpClient from '../plugins/axios'

export function getCustomConfig (params) {
  return HttpClient({
    url: '/customConfig',
    method: 'get',
    params
  })
}
