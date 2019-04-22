import marked from 'marked'
import hljs from 'highlight.js'
// import consola from 'consola'

marked.setOptions({
  renderer: new marked.Renderer(),
  highlight: (code) => {
    return hljs.highlightAuto(code).value
  },
  pedantic: false,
  gfm: true,
  tables: true,
  breaks: true,
  sanitize: false,
  smartLists: true,
  smartypants: false
})
const renderer = new marked.Renderer()

export default (content) => {
  // consola.ready(content)
  if (typeof content !== 'string') {
    return ''
  }
  return marked(content, { renderer })
}
