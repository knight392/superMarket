import axios from 'axios'
export function request(config) {
  // 每连接一个服务器就使用一个实例
    const instance1 = axios.create({
        baseURL: 'http://152.136.185.210:7878/api/m5',
        timeout: 5000
    })

    // 配置拦截器
    // 请求拦截
    instance1.interceptors.request.use(config => {
        return config
    }, err => {
        console.log(err)
    })
    // 接收拦截
    instance1.interceptors.response.use(config => {
        return config.data
    }, err => {
        console.log(err)
    })
    return  instance1(config)
}