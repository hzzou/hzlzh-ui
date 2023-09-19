import DefaultTheme from "vitepress/theme";
import hzlzhUI from "@hzlzh/ui";

// 引入demo相关组件进行注册
//import "vitepress-theme-demoblock/dist/theme/styles/index.css";
//import Demo from "vitepress-theme-demoblock/dist/client/components/Demo.vue";
//import DemoBlock from "vitepress-theme-demoblock/dist/client/components/DemoBlock.vue";

// 另一个demo插件
import { NaiveUIContainer } from '@vitepress-demo-preview/component';
import '@vitepress-demo-preview/component/dist/style.css';
import "../../css/base.scss"; // 重置某些样式

export default {
    ...DefaultTheme,
  enhanceApp({ app, router, siteData }) {
      // console.log(app)
      // console.log(router)
      // console.log(siteData)
      app.use(hzlzhUI); //注册库
      //app.component("demo", Demo); //注册单个组件
      //app.component("demo-block", DemoBlock);

      app.component('demo-preview', NaiveUIContainer)
  }
}

