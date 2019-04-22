export const state = () => ({
  comments: []
})

export const mutations = {
  SET_COMMENT_LIST: (state, comments) => {
    state.comments = comments
  }
}

export const actions = {
  getCommentList({ commit, params = {} }) {
    return new Promise((resolve, reject) => {
      this.$axios.$get('/comment/0', { params }).then(res => {
        commit('SET_COMMENT_LIST', res)
        resolve(res)
      })
      .catch(error => {
        reject(error)
      })
    })
  },
  submitComment({ commit, params = {} }) {
    return new Promise((resolve, reject) => {
      this.$axios.$post('/comment', params).then(res => {
        resolve(res)
      }).catch(error => {
        reject(error)
      })
    })
  }
}
