export const state = () => ({
  rankList: []
})

export const mutations = {
  SET_RANK_LIST: (state, list) => {
    state.rankList = list
  }
}

export const actions = {
  nuxtServerInit({ commit }, context) {
    return new Promise((resolve, reject) => {
      this.$axios.$get('/index/ranklist').then((res) => {
        commit('SET_RANK_LIST', res)
        resolve(res)
      })
      .catch((error) => {
        reject(error)
      })
    })
  }
}
