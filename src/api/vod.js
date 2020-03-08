import HttpClient from '../plugins/axios'

export function getFilmDetail () {
  return HttpClient({
    url: '/film',
    method: 'get'
  })
}
