import HttpClient from '../plugins/axios'

export function getAllChannel () {
  return HttpClient({
    url: '/channel',
    method: 'get'
  })
}
