import comp from "/home/arch/vue/op/docs/.vuepress/.temp/pages/guide.html.vue"
const data = JSON.parse("{\"path\":\"/guide.html\",\"title\":\"自学指南\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"基本概念\",\"slug\":\"基本概念\",\"link\":\"#基本概念\",\"children\":[]},{\"level\":2,\"title\":\"搭建好开发环境\",\"slug\":\"搭建好开发环境\",\"link\":\"#搭建好开发环境\",\"children\":[{\"level\":3,\"title\":\"vscode\",\"slug\":\"vscode\",\"link\":\"#vscode\",\"children\":[]},{\"level\":3,\"title\":\"IDE\",\"slug\":\"ide\",\"link\":\"#ide\",\"children\":[]}]},{\"level\":2,\"title\":\"自学资源\",\"slug\":\"自学资源\",\"link\":\"#自学资源\",\"children\":[]},{\"level\":2,\"title\":\"一些建议\",\"slug\":\"一些建议\",\"link\":\"#一些建议\",\"children\":[]}],\"git\":{\"updatedTime\":1721313563000,\"contributors\":[{\"name\":\"kungfudaibi\",\"email\":\"1534779821@qq.com\",\"commits\":2}]},\"filePathRelative\":\"guide.md\"}")
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
