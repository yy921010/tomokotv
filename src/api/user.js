import HttpClient from '../plugins/axios'

export function login ({ username, password }) {
  return HttpClient({
    url: '/token',
    method: 'post',
    data: {
      username,
      password,
      grant_type: 'password'
    }
  })
}

export function refreshToken (refreshToken) {
  return HttpClient({
    url: '/token',
    method: 'post',
    data: {
      refreshToken,
      grant_type: 'refresh_token'
    }
  })
}

export function revokeToken (token) {
  return HttpClient({
    url: '/token/revoke',
    method: 'post',
    data: {
      token
    }
  })
}

export function getUserInfo (username) {
  return HttpClient({
    url: '/user',
    method: 'get',
    params: {
      username
    }
  })
}

export function getProfiles (masterUserId) {
  return HttpClient({
    url: '/profile',
    method: 'get',
    params: {
      masterUserId
    }
  })
}
