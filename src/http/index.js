import axios from "axios"
import NProgress from "nprogress" // 引入nprogress插件
import "nprogress/nprogress.css"

const isProduction = process.env.NODE_ENV === "production"

// 创建axios配置对象
const service = axios.create()


// 超时时间
service.defaults.timeout = 10000

// 响应拦截器
service.interceptors.response.use(
  response => {
     NProgress.done()
    return response.data
  },
  err => {
    if (err.response.status === 401) {
      router.push("/login")
    }
  }
)
export default service
