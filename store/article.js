// import consola from 'consola'
export const state = () => ({
  list: [],
  article: {}
})

export const mutations = {
  SET_ARTICLE_LIST: (state, list) => {
    state.list = list
  },
  SET_ARTICLE_DETAIL: (state, article) => {
    state.article = article
  }
}

export const actions = {
  getArticleList({ commit, params = {} }) {
    return new Promise((resolve, reject) => {
      this.$axios.$get('/articles', { params }).then(res => {
        commit('SET_ARTICLE_LIST', res)
        resolve(res)
      })
      .catch(error => {
        reject(error)
      })
    })
  },
  getArticleDetail({ commit, params = {} }) {
    return new Promise((resolve, reject) => {
      this.$axios.$get(`/article/0`).then((res) => {
        commit('SET_ARTICLE_DETAIL', res)
        resolve(res)
      })
      .catch((error) => {
        reject(error)
      })
    })
  }
}
