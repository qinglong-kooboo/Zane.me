// import Mock from 'mockjs'
// import { getIndexPageSliders } from './main.js'

// // 配置Ajax请求延时，可用来测试网络延迟大时项目中一些效果
// Mock.setup({
//   timeout: 1000
// })

// // 登录相关和获取用户信息
// Mock.mock(/\/get_index_sliders/, getIndexPageSliders)

// export default Mock
// import MockAdapter from 'axios-mock-adapter'
// import axios from '../../lib/api.request'
// import data from './data/sliders'

// export default ({ axios }) => {
//   const mock = new MockAdapter(axios, { delayResponse: 500 })
//   mock.onGet('index/sliders').reply(200, data)
// }
// import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import data from './data/sliders'
export default ({ $axios }) => {
  const mock = new MockAdapter($axios, { delayResponse: 500 })
  mock.onGet('/index/sliders').reply(200, data)
}
