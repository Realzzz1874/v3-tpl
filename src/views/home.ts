import { reactive, toRefs } from 'vue'
import { testApi } from '@/api/service'

export interface HomeTestModel {
  name: string;
}

export const HomeService = () => {

  const testRes = reactive<HomeTestModel>({
    name: 'maria'
  })

  const testApiData = async () => {
    try {
      await testApi()
    } catch { }
    testRes.name = 'maria_ovo'
  }
  return { ...toRefs(testRes), testApiData }
}
