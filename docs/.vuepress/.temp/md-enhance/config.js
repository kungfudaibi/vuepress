import { defineClientConfig } from "vuepress/client";
import "/home/arch/vue/op/node_modules/vuepress-plugin-md-enhance/lib/client/styles/figure.scss";
import { useHintContainers } from "/home/arch/vue/op/node_modules/vuepress-plugin-md-enhance/lib/client/composables/useHintContainers.js";
import "/home/arch/vue/op/node_modules/vuepress-plugin-md-enhance/lib/client/styles/hint/index.scss";
import "/home/arch/vue/op/node_modules/vuepress-plugin-md-enhance/lib/client/styles/image-mark.scss"

export default defineClientConfig({
  enhance: ({ app }) => {

  },
  setup: () => {
useHintContainers();
  }
});
