// import consola from 'consola'
export const state = () => ({
  list: []
})

export const mutations = {
  SET_ARTICLE_LIST: (state, list) => {
    state.list = list
  }
}

export const actions = {
  getArticleList({ commit }) {
    return new Promise((resolve, reject) => {
      this.$axios.$get('/articles').then(res => {
        commit('SET_ARTICLE_LIST', res)
        resolve(res)
      })
      .catch(error => {
        reject(error)
      })
    })
  }
}
