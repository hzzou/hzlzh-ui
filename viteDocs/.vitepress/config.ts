import { defineConfig } from 'vitepress'
import path from "node:path"
//import demoblock from "vitepress-theme-demoblock";

import { containerPreview, componentPreview } from '@vitepress-demo-preview/plugin'

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
                    {text: "Button按钮", link: "/components/button"},
                    {text: "Input输入框", link: "/components/input"},
                    {text: "Dialog弹框", link: "/components/dialog"},
                    {text: "Icon图标", link: "/components/icon"},
                    {text: "Popper气泡卡片", link: "/components/popper"},
                    {text: "VirtualTable虚拟表格", link: "/components/virtual-table"},
                ]
            }
        ],
        // 右上角导航
        nav:[
            { text: "介绍", link: "/"},
            { text: "组件", link: "/components/button"},
            { text: "个人简历", link: "components/profile"}
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
        lineNumbers: true,
        config: (md) => {
            // md.use(demoblock, {
            //     scriptReplaces: [
            //         { searchValue: /import ({.*}) from "vue"/g,
            //             replaceValue: (s, s1) => `const ${s1} = Vue`
            //         }
            //     ]
            // })

            md.use(containerPreview)
            md.use(componentPreview)
        }
    }
})
