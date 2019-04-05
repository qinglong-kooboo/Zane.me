import MockAdapter from 'axios-mock-adapter'
import sliders from './data/sliders'
import articles from './data/articles'

export default ({ $axios }) => {
  const mock = new MockAdapter($axios, { delayResponse: 500 })
  mock.onGet('/index/sliders').reply(200, sliders)
  mock.onGet('/articles').reply(200, articles.list)
}
