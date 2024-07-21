import comp from "/home/arch/vue/op/docs/.vuepress/.temp/pages/about.html.vue"
const data = JSON.parse("{\"path\":\"/about.html\",\"title\":\"关于本项目\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"后记\",\"slug\":\"后记\",\"link\":\"#后记\",\"children\":[]}],\"git\":{\"updatedTime\":1721308867000,\"contributors\":[{\"name\":\"kungfudaibi\",\"email\":\"1534779821@qq.com\",\"commits\":1}]},\"filePathRelative\":\"about.md\"}")
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
