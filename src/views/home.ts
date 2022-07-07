// import { reactive, toRefs } from 'vue'
import { testApi } from '@/api/service'

export const HomeService = () => {

  const testApiData = async () => {
    try {
      await testApi()
    } catch {
      return { code: 400 }
    }
  }

  return { testApiData }
}
