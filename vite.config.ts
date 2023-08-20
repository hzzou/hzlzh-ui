import vue from "@vitejs/plugin-vue";
import fs from "node:fs";
import path from "node:path";
import {defineConfig, UserConfigExport} from "vite";
import dts from "vite-plugin-dts";
import vueSetupExtend from "vite-plugin-vue-setup-extend";

// 获取items下一级所有的文件和文件夹
const items = fs.readdirSync(path.resolve(__dirname, "packages"))
	.filter(item => {
		return fs.statSync(path.resolve(__dirname+"/packages", item)).isDirectory();
	});

const singleInput = [];
items.map(ele => {
	singleInput.push(path.resolve(__dirname+"/packages/"+ele+"/index.ts"));
});

export default defineConfig({
	plugins: [
        vue(),
        vueSetupExtend(),
        dts({
            "outputDir":[
                // 声明文件输出到对应目录下
                path.resolve(__dirname+"/lib/es"),
                path.resolve(__dirname+"/lib/cjs"),
            ]
        })
	],
	build: {
		targets: ["chrome 52"],
        cssTarget: ["chrome 52"],
		minify: false,
		emptyOutDir: true,
		lib: {
			entry: [
                // 统一入口(编译后形成统一出口)
                path.resolve(__dirname+"/packages/index.ts"),
                // 单独入口(编译后形成单独出口)
                ...singleInput
            ],
			name: "hzlzh-ui"
		},
		outDir: path.resolve(__dirname, "lib"),
		rollupOptions: {
			external: ["vue"],
			output: [
				{
					dir: "lib/es",
					format: "es",
					exports: "named",
					preserveModules: true,
					globals: {
						vue: "Vue"
					}
				},
				{
					dir: "lib/cjs",
					format: "cjs",
					exports: "named",
					preserveModules: true,
					globals: {
						vue: "Vue"
					}
				},
                {
                    dir: "lib/amd",
                    format: "amd",
                    exports: "named",
                    name: "[named].js",
                    preserveModules: true,
                    globals: {
                        vue: "Vue"
                    }
                }]
		}
	}
} as UserConfigExport);
