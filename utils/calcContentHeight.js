export default () => {
  const content = document.getElementsByClassName('content')[0]
  const pos = content.getBoundingClientRect()
  const clientHeight = document.body.clientHeight
  const contentHeight = clientHeight - pos.top
  return contentHeight
}
