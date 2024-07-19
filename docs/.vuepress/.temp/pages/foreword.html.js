import comp from "/home/arch/vue/op/docs/.vuepress/.temp/pages/foreword.html.vue"
const data = JSON.parse("{\"path\":\"/foreword.html\",\"title\":\"前言\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"前言\"},\"headers\":[{\"level\":2,\"title\":\"为什么要写这个文档\",\"slug\":\"为什么要写这个文档\",\"link\":\"#为什么要写这个文档\",\"children\":[]},{\"level\":2,\"title\":\"如何使用本文档\",\"slug\":\"如何使用本文档\",\"link\":\"#如何使用本文档\",\"children\":[]}],\"git\":{\"updatedTime\":1721313563000,\"contributors\":[{\"name\":\"kungfudaibi\",\"email\":\"1534779821@qq.com\",\"commits\":2}]},\"filePathRelative\":\"foreword.md\"}")
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
