export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/AI.html", { loader: () => import(/* webpackChunkName: "AI.html" */"/home/arch/vue/op/docs/.vuepress/.temp/pages/AI.html.js"), meta: {"title":""} }],
  ["/HPC.html", { loader: () => import(/* webpackChunkName: "HPC.html" */"/home/arch/vue/op/docs/.vuepress/.temp/pages/HPC.html.js"), meta: {"title":""} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/home/arch/vue/op/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Home"} }],
  ["/about.html", { loader: () => import(/* webpackChunkName: "about.html" */"/home/arch/vue/op/docs/.vuepress/.temp/pages/about.html.js"), meta: {"title":""} }],
  ["/algorithm.html", { loader: () => import(/* webpackChunkName: "algorithm.html" */"/home/arch/vue/op/docs/.vuepress/.temp/pages/algorithm.html.js"), meta: {"title":""} }],
  ["/foreword.html", { loader: () => import(/* webpackChunkName: "foreword.html" */"/home/arch/vue/op/docs/.vuepress/.temp/pages/foreword.html.js"), meta: {"title":"前言"} }],
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"/home/arch/vue/op/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"Get Started"} }],
  ["/guide.html", { loader: () => import(/* webpackChunkName: "guide.html" */"/home/arch/vue/op/docs/.vuepress/.temp/pages/guide.html.js"), meta: {"title":"自学指南"} }],
  ["/linux.html", { loader: () => import(/* webpackChunkName: "linux.html" */"/home/arch/vue/op/docs/.vuepress/.temp/pages/linux.html.js"), meta: {"title":"Linux之旅"} }],
  ["/security.html", { loader: () => import(/* webpackChunkName: "security.html" */"/home/arch/vue/op/docs/.vuepress/.temp/pages/security.html.js"), meta: {"title":""} }],
  ["/start.html", { loader: () => import(/* webpackChunkName: "start.html" */"/home/arch/vue/op/docs/.vuepress/.temp/pages/start.html.js"), meta: {"title":"开始"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/home/arch/vue/op/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
