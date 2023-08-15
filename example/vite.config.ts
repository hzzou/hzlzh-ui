import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "node:path";
import Components from "unplugin-vue-components/vite";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
        vue(),
        // 动态引入
        Components({
            resolvers: [
                (componentName) => {
                    // 此处componentName是来自页面上使用的组件前缀
                    console.log(componentName)
                    if(componentName.toLowerCase().startsWith("hz")){
                        return {name: componentName.slice(2), from: "hzlzh-ui"}
                    }
                }
            ]
        })
    ],
	resolve:{
		alias:{
			"@": path.resolve(__dirname, "src")
		}
	},
	server:{
		port: 3000
	}
});
