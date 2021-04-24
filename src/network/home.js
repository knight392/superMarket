import {request} from './request'

export function requestHomeMultiData() {
  return request({
    url: '/home/multidata'
  })
}

export function requestHomeGoodsData(type, page) {
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}