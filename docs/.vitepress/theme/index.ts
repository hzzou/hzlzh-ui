import DefaultTheme from "vitepress/theme";
import "hzlzh-ui/lib/es/style.css";
import hzlzhUI from "hzlzh-ui";
export default {
    ...DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    // console.log(app)
    // console.log(router)
    // console.log(siteData)
      app.use(hzlzhUI);
  }
}

