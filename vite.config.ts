import {defineConfig} from "vite";
import vue from "@vitejs/plugin-vue";
import path from "node:path";
import fs from "node:fs";
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
				path.resolve(__dirname+"/lib/es"),
				path.resolve(__dirname+"/lib/cjs"),
			]
		})
	],
	build: {
		emptyOutDir: true,
		lib: {
			entry: [
				path.resolve(__dirname+"/packages/index.ts"),
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
				}]
		}
	}
});
