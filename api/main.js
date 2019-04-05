export const getSliderData = () => {
  return this.$axios.$get({
    url: '/index/sliders',
    method: 'get'
  })
}
