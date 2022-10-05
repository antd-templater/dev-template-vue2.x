import { axios } from '@/utils/request'

/**
 * @descrption 认证接口
 * @date 2022-07-11
 * @lastModifiedBy
 * @lastModifiedDate
 *
 * @api login: 系统登录
 * @api logout: 系统退出
 * @api modifyPassword: 修改用户密码
 */
const api = {
  login: '/auth/login',
  logout: '/auth/logout',
  modifyPassword: '/auth/modifyPassword'
}

export function login (data) {
  return axios({
    url: api.login,
    method: 'post',
    data: data
  })
}

export function logout (data) {
  return axios({
    url: api.logout,
    method: 'post',
    data: data
  })
}

export function modifyPassword (data) {
  return axios({
    url: api.modifyPassword,
    method: 'post',
    data: data
  })
}

export default api
