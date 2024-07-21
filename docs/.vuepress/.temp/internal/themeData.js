export const themeData = JSON.parse("{\"logo\":\"/image/logo.png\",\"navbar\":[{\"text\":\"Home\",\"link\":\"/\"},{\"text\":\"前言\",\"link\":\"/foreword.md\"},{\"text\":\"开始\",\"link\":\"/start.md\"},{\"text\":\"自学指南\",\"link\":\"/guide.md\"},{\"text\":\"Linux之旅\",\"link\":\"/linux.md\"},{\"text\":\"超算\",\"link\":\"/HPC.md\"},{\"text\":\"算法\",\"link\":\"/algorithm.md\"},{\"text\":\"网络安全\",\"link\":\"/security.md\"},{\"text\":\"人工智能\",\"link\":\"/AI.md\"},{\"text\":\"关于本项目\",\"link\":\"/about.md\"},{\"text\":\"GitHub\",\"link\":\"\"}],\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebar\":\"heading\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
