import HttpClient from '../plugins/axios'

export function getMenu () {
  return HttpClient({
    url: '/menu',
    method: 'get'
  })
}
