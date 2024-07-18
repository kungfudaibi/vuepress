import comp from "/home/arch/vue/op/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"Home\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"title\":\"Home\",\"heroImage\":\"/image/logo.png\",\"actions\":[{\"text\":\"Get Start\",\"link\":\"/foreword.md\",\"type\":\"primary\"}],\"footer\":\"GFDL Licensed\"},\"headers\":[],\"git\":{\"updatedTime\":1721308867000,\"contributors\":[{\"name\":\"kungfudaibi\",\"email\":\"1534779821@qq.com\",\"commits\":1}]},\"filePathRelative\":\"README.md\"}")
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
