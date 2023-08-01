// vite.config.ts
import vue from "file:///Users/hzlzh/Documents/NodeJS/hzlzh-ui/node_modules/.pnpm/@vitejs+plugin-vue@4.2.3_vite@4.0.0+vue@3.3.4/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import fs from "node:fs";
import path from "node:path";
import { defineConfig } from "file:///Users/hzlzh/Documents/NodeJS/hzlzh-ui/node_modules/.pnpm/vite@4.0.0_kxkosmzevect5blmp7ly2aqtpa/node_modules/vite/dist/node/index.js";
import dts from "file:///Users/hzlzh/Documents/NodeJS/hzlzh-ui/node_modules/.pnpm/vite-plugin-dts@2.3.0_et3jvkuhjpvfrlmiarod6nlznm/node_modules/vite-plugin-dts/dist/index.mjs";
import vueSetupExtend from "file:///Users/hzlzh/Documents/NodeJS/hzlzh-ui/node_modules/.pnpm/vite-plugin-vue-setup-extend@0.4.0_vite@4.0.0/node_modules/vite-plugin-vue-setup-extend/dist/index.mjs";
var __vite_injected_original_dirname = "/Users/hzlzh/Documents/NodeJS/hzlzh-ui";
var items = fs.readdirSync(path.resolve(__vite_injected_original_dirname, "packages")).filter((item) => {
  return fs.statSync(path.resolve(__vite_injected_original_dirname + "/packages", item)).isDirectory();
});
var singleInput = [];
items.map((ele) => {
  singleInput.push(path.resolve(__vite_injected_original_dirname + "/packages/" + ele + "/index.ts"));
});
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    vueSetupExtend(),
    dts({
      "outputDir": [
        path.resolve(__vite_injected_original_dirname + "/lib/es"),
        path.resolve(__vite_injected_original_dirname + "/lib/cjs")
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
        path.resolve(__vite_injected_original_dirname + "/packages/index.ts"),
        ...singleInput
      ],
      name: "hzlzh-ui"
    },
    outDir: path.resolve(__vite_injected_original_dirname, "lib"),
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
        }
      ]
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvaHpsemgvRG9jdW1lbnRzL05vZGVKUy9oemx6aC11aVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL2h6bHpoL0RvY3VtZW50cy9Ob2RlSlMvaHpsemgtdWkvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL2h6bHpoL0RvY3VtZW50cy9Ob2RlSlMvaHpsemgtdWkvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgdnVlIGZyb20gXCJAdml0ZWpzL3BsdWdpbi12dWVcIjtcbmltcG9ydCBmcyBmcm9tIFwibm9kZTpmc1wiO1xuaW1wb3J0IHBhdGggZnJvbSBcIm5vZGU6cGF0aFwiO1xuaW1wb3J0IHtkZWZpbmVDb25maWcsIFVzZXJDb25maWdFeHBvcnR9IGZyb20gXCJ2aXRlXCI7XG5pbXBvcnQgZHRzIGZyb20gXCJ2aXRlLXBsdWdpbi1kdHNcIjtcbmltcG9ydCB2dWVTZXR1cEV4dGVuZCBmcm9tIFwidml0ZS1wbHVnaW4tdnVlLXNldHVwLWV4dGVuZFwiO1xuXG4vLyBcdTgzQjdcdTUzRDZpdGVtc1x1NEUwQlx1NEUwMFx1N0VBN1x1NjI0MFx1NjcwOVx1NzY4NFx1NjU4N1x1NEVGNlx1NTQ4Q1x1NjU4N1x1NEVGNlx1NTkzOVxuY29uc3QgaXRlbXMgPSBmcy5yZWFkZGlyU3luYyhwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcInBhY2thZ2VzXCIpKVxuXHQuZmlsdGVyKGl0ZW0gPT4ge1xuXHRcdHJldHVybiBmcy5zdGF0U3luYyhwYXRoLnJlc29sdmUoX19kaXJuYW1lK1wiL3BhY2thZ2VzXCIsIGl0ZW0pKS5pc0RpcmVjdG9yeSgpO1xuXHR9KTtcblxuY29uc3Qgc2luZ2xlSW5wdXQgPSBbXTtcbml0ZW1zLm1hcChlbGUgPT4ge1xuXHRzaW5nbGVJbnB1dC5wdXNoKHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUrXCIvcGFja2FnZXMvXCIrZWxlK1wiL2luZGV4LnRzXCIpKTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuXHRwbHVnaW5zOiBbXG4gICAgICAgIHZ1ZSgpLFxuICAgICAgICB2dWVTZXR1cEV4dGVuZCgpLFxuICAgICAgICBkdHMoe1xuICAgICAgICAgICAgXCJvdXRwdXREaXJcIjpbXG4gICAgICAgICAgICAgICAgcGF0aC5yZXNvbHZlKF9fZGlybmFtZStcIi9saWIvZXNcIiksXG4gICAgICAgICAgICAgICAgcGF0aC5yZXNvbHZlKF9fZGlybmFtZStcIi9saWIvY2pzXCIpLFxuICAgICAgICAgICAgXVxuICAgICAgICB9KVxuXHRdLFxuXHRidWlsZDoge1xuXHRcdHRhcmdldHM6IFtcImNocm9tZSA1MlwiXSxcbiAgICAgICAgY3NzVGFyZ2V0OiBbXCJjaHJvbWUgNTJcIl0sXG5cdFx0bWluaWZ5OiBmYWxzZSxcblx0XHRlbXB0eU91dERpcjogdHJ1ZSxcblx0XHRsaWI6IHtcblx0XHRcdGVudHJ5OiBbXG5cdFx0XHRcdHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUrXCIvcGFja2FnZXMvaW5kZXgudHNcIiksXG5cdFx0XHRcdC4uLnNpbmdsZUlucHV0XG5cdFx0XHRdLFxuXHRcdFx0bmFtZTogXCJoemx6aC11aVwiXG5cdFx0fSxcblx0XHRvdXREaXI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwibGliXCIpLFxuXHRcdHJvbGx1cE9wdGlvbnM6IHtcblx0XHRcdGV4dGVybmFsOiBbXCJ2dWVcIl0sXG5cdFx0XHRvdXRwdXQ6IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGRpcjogXCJsaWIvZXNcIixcblx0XHRcdFx0XHRmb3JtYXQ6IFwiZXNcIixcblx0XHRcdFx0XHRleHBvcnRzOiBcIm5hbWVkXCIsXG5cdFx0XHRcdFx0cHJlc2VydmVNb2R1bGVzOiB0cnVlLFxuXHRcdFx0XHRcdGdsb2JhbHM6IHtcblx0XHRcdFx0XHRcdHZ1ZTogXCJWdWVcIlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGRpcjogXCJsaWIvY2pzXCIsXG5cdFx0XHRcdFx0Zm9ybWF0OiBcImNqc1wiLFxuXHRcdFx0XHRcdGV4cG9ydHM6IFwibmFtZWRcIixcblx0XHRcdFx0XHRwcmVzZXJ2ZU1vZHVsZXM6IHRydWUsXG5cdFx0XHRcdFx0Z2xvYmFsczoge1xuXHRcdFx0XHRcdFx0dnVlOiBcIlZ1ZVwiXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZGlyOiBcImxpYi9hbWRcIixcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0OiBcImFtZFwiLFxuICAgICAgICAgICAgICAgICAgICBleHBvcnRzOiBcIm5hbWVkXCIsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiW25hbWVkXS5qc1wiLFxuICAgICAgICAgICAgICAgICAgICBwcmVzZXJ2ZU1vZHVsZXM6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGdsb2JhbHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZ1ZTogXCJWdWVcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfV1cblx0XHR9XG5cdH1cbn0gYXMgVXNlckNvbmZpZ0V4cG9ydCk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQW9TLE9BQU8sU0FBUztBQUNwVCxPQUFPLFFBQVE7QUFDZixPQUFPLFVBQVU7QUFDakIsU0FBUSxvQkFBcUM7QUFDN0MsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sb0JBQW9CO0FBTDNCLElBQU0sbUNBQW1DO0FBUXpDLElBQU0sUUFBUSxHQUFHLFlBQVksS0FBSyxRQUFRLGtDQUFXLFVBQVUsQ0FBQyxFQUM5RCxPQUFPLFVBQVE7QUFDZixTQUFPLEdBQUcsU0FBUyxLQUFLLFFBQVEsbUNBQVUsYUFBYSxJQUFJLENBQUMsRUFBRSxZQUFZO0FBQzNFLENBQUM7QUFFRixJQUFNLGNBQWMsQ0FBQztBQUNyQixNQUFNLElBQUksU0FBTztBQUNoQixjQUFZLEtBQUssS0FBSyxRQUFRLG1DQUFVLGVBQWEsTUFBSSxXQUFXLENBQUM7QUFDdEUsQ0FBQztBQUVELElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzNCLFNBQVM7QUFBQSxJQUNGLElBQUk7QUFBQSxJQUNKLGVBQWU7QUFBQSxJQUNmLElBQUk7QUFBQSxNQUNBLGFBQVk7QUFBQSxRQUNSLEtBQUssUUFBUSxtQ0FBVSxTQUFTO0FBQUEsUUFDaEMsS0FBSyxRQUFRLG1DQUFVLFVBQVU7QUFBQSxNQUNyQztBQUFBLElBQ0osQ0FBQztBQUFBLEVBQ1I7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNOLFNBQVMsQ0FBQyxXQUFXO0FBQUEsSUFDZixXQUFXLENBQUMsV0FBVztBQUFBLElBQzdCLFFBQVE7QUFBQSxJQUNSLGFBQWE7QUFBQSxJQUNiLEtBQUs7QUFBQSxNQUNKLE9BQU87QUFBQSxRQUNOLEtBQUssUUFBUSxtQ0FBVSxvQkFBb0I7QUFBQSxRQUMzQyxHQUFHO0FBQUEsTUFDSjtBQUFBLE1BQ0EsTUFBTTtBQUFBLElBQ1A7QUFBQSxJQUNBLFFBQVEsS0FBSyxRQUFRLGtDQUFXLEtBQUs7QUFBQSxJQUNyQyxlQUFlO0FBQUEsTUFDZCxVQUFVLENBQUMsS0FBSztBQUFBLE1BQ2hCLFFBQVE7QUFBQSxRQUNQO0FBQUEsVUFDQyxLQUFLO0FBQUEsVUFDTCxRQUFRO0FBQUEsVUFDUixTQUFTO0FBQUEsVUFDVCxpQkFBaUI7QUFBQSxVQUNqQixTQUFTO0FBQUEsWUFDUixLQUFLO0FBQUEsVUFDTjtBQUFBLFFBQ0Q7QUFBQSxRQUNBO0FBQUEsVUFDQyxLQUFLO0FBQUEsVUFDTCxRQUFRO0FBQUEsVUFDUixTQUFTO0FBQUEsVUFDVCxpQkFBaUI7QUFBQSxVQUNqQixTQUFTO0FBQUEsWUFDUixLQUFLO0FBQUEsVUFDTjtBQUFBLFFBQ0Q7QUFBQSxRQUNZO0FBQUEsVUFDSSxLQUFLO0FBQUEsVUFDTCxRQUFRO0FBQUEsVUFDUixTQUFTO0FBQUEsVUFDVCxNQUFNO0FBQUEsVUFDTixpQkFBaUI7QUFBQSxVQUNqQixTQUFTO0FBQUEsWUFDTCxLQUFLO0FBQUEsVUFDVDtBQUFBLFFBQ0o7QUFBQSxNQUFDO0FBQUEsSUFDZjtBQUFBLEVBQ0Q7QUFDRCxDQUFxQjsiLAogICJuYW1lcyI6IFtdCn0K
