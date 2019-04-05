// import consola from 'consola'
// import { getSliderData } from '../api/main.js'
export const state = () => ({
  sliders: {}
})

export const mutations = {
  SET_SLIDERS: (state, sliders) => {
    state.sliders = sliders
  }
}

export const actions = {
  getSlidersData({ commit }) {
    return new Promise((resolve, reject) => {
      this.$axios.$get('/index/sliders')
      .then(res => {
        commit('SET_SLIDERS', res)
        resolve(res)
      })
      .catch(error => {
        reject(error)
      })
    })
  }
}
