import comp from "D:/code/opensource/vuepress-starter/docs/.vuepress/.temp/pages/qianyan.html.vue"
const data = JSON.parse("{\"path\":\"/qianyan.html\",\"title\":\"前言\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"前言\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"qianyan.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
