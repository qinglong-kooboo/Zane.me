// cacl date between input time and now
export default (time) => {
  const now = Date.parse(new Date())
  const gap = (now - time) / 60 * 1000
  if (gap >= 24) {
    const result = gap / 24
    return `${result}天前`
  } else if (gap >= 1 && gap < 24) {
    return `${gap}小时前`
  } else if (gap > 0 ){
  }
  return gap / 24 > 0 ? gap / 24 : gap
}
