import MockAdapter from 'axios-mock-adapter'
import sliders from './data/sliders'
import articles from './data/articles'
import articleDetail from './data/articleDetail'
import rankList from './data/ranklist'
import comments from './data/comment'

// const article = '/articleDetail'
// const articleUrl = new RegExp(`${article}/*`)

export default ({ $axios }) => {
  const mock = new MockAdapter($axios, { delayResponse: 500 })
  mock.onGet('/index/sliders').reply(200, sliders)
  mock.onGet('/articles').reply(200, articles.list)
  mock.onGet('/article/0').reply(200, articleDetail)
  mock.onGet('/index/ranklist').reply(200, rankList)
  mock.onGet('/comment/0').reply(200, comments.comments)
}
