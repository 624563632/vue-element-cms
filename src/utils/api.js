import axios from './fetch'


//登录
export function fetchLogin(data){
  return axios({
      url:'/users/cms/login',
      method:'POST',
      data
  })
}

// 获取所有品类
export function fetchAllCates(params) {
  return axios({
    url: '/cates/all',
    method: 'GET',
    params
  })
}

// 添加商品
export function fetchCreateGood(data) {
  return axios({
    url: '/goods/create',
    method: 'POST',
    data
  })
}
// 获取商品列表
export function fetchGoodList(params) {
  return axios({
    url: '/goods/list',
    method: "GET",
    params
  })
}
// 获取商品详情
export function fetchGoodDetail(params) {
  return axios({
    url: '/goods/detail',
    method: 'GET',
    params
  })
}

export default {
    fetchLogin,
    fetchCreateGood,
    fetchAllCates,
    fetchGoodList,
    fetchGoodDetail
}