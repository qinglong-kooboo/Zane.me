// cacl date between input time and now
export default (time) => {
  const now = (new Date()).getTime()
  const gap = Math.round((now - time) / (60 * 1000))
  if (gap < 1) {
    return '刚刚'
  } else if (gap > 1 && gap < 60) {
    return `${gap}分钟前`
  } else if (gap > 60 && gap / 60 < 24) {
    return `${Math.round(gap / 60)}小时前`
  } else if (gap / 60 >= 24) {
    return `${Math.round(gap / (60 * 24))}天前`
  }
}
