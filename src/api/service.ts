import request from '@/utils/request'
import { API_URL } from '@/config/config'

// 创建接口调用实例
export const testApi = () => {
  return request.get(API_URL.testUrl)
}
