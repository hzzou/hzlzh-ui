import { defineConfig } from 'vitepress'
import path from "node:path"

// https://vitepress.dev/reference/site-config
export default defineConfig({
    base: "/hzlzh-ui/",
    outDir:  path.resolve(__dirname+"../../../docs"),
    title: "hzlzh-ui",
    description: "hzlzh-ui组件库文档说明",
    themeConfig:{
        // 左侧导航
        sidebar:[
            {
                text: '导航',
                items:[
                    {text: "介绍", link: "/"},
                    {text: "Button", link: "/components/button"},
                    {text: "Input", link: "/components/input"},
                    {text: "Dialog", link: "/components/dialog"},
                ]
            }
        ],
        // 右上角导航
        nav:[
            { text: "介绍", link: "/"},
            { text: "组件", link: "/components/button"},
        ],
        // 脚步导航
        docFooter: {
            prev: "上一页",
            next: "下一页"
        },
        //搜索
        search: {
            provider: "local"
        },
        aside: false,
    },
    markdown:{
        config: (md) => {

        }
    }
})
