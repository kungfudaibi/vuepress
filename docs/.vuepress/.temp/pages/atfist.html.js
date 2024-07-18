import comp from "D:/code/opensource/vuepress-starter/docs/.vuepress/.temp/pages/atfist.html.vue"
const data = JSON.parse("{\"path\":\"/atfist.html\",\"title\":\"前言\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"一名计算机学生进入大学应该做什么\",\"slug\":\"一名计算机学生进入大学应该做什么\",\"link\":\"#一名计算机学生进入大学应该做什么\",\"children\":[{\"level\":3,\"title\":\"从STFW和RTFM开始\",\"slug\":\"从stfw和rtfm开始\",\"link\":\"#从stfw和rtfm开始\",\"children\":[]},{\"level\":3,\"title\":\"学会提问\",\"slug\":\"学会提问\",\"link\":\"#学会提问\",\"children\":[]},{\"level\":3,\"title\":\"使用学生邮箱申请能申请到的资源\",\"slug\":\"使用学生邮箱申请能申请到的资源\",\"link\":\"#使用学生邮箱申请能申请到的资源\",\"children\":[]}]}],\"git\":{},\"filePathRelative\":\"atfist.md\"}")
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
