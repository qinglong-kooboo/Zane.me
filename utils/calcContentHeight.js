
export default () => {
  const content = document.getElementsByClassName('content')[0]
  const pos = content.getBoundingClientRect()
  const clientHeight = document.body.offsetHeight
  const contentHeight = clientHeight - 2 * pos.top
  return contentHeight
}
