import { createApp } from 'vue'
import App from './App.vue'
import "hzlzh-ui/style.css"
import hzlzhUI from "hzlzh-ui";

const app = createApp(App);
// 全局引入
// app.use(hzlzhUI);
app.mount('#app');

