import comp from "/home/arch/vue/op/docs/.vuepress/.temp/pages/security.html.vue"
const data = JSON.parse("{\"path\":\"/security.html\",\"title\":\"网络安全\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"渗透测试\",\"slug\":\"渗透测试\",\"link\":\"#渗透测试\",\"children\":[{\"level\":3,\"title\":\"脚本小子\",\"slug\":\"脚本小子\",\"link\":\"#脚本小子\",\"children\":[]}]}],\"git\":{\"updatedTime\":1721308867000,\"contributors\":[{\"name\":\"kungfudaibi\",\"email\":\"1534779821@qq.com\",\"commits\":1}]},\"filePathRelative\":\"security.md\"}")
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
