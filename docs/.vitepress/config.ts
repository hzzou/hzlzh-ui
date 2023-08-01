import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "hzlzh-ui",
    description: "hzlzh-ui组件库文档说明",
    themeConfig:{
        sidebar:[
            {
                text: '导航',
                items:[
                    {text: "介绍", link: "/"},
                    {text: "Button", link: "/components/button"},
                    {text: "Input", link: "/components/input"},
                ]
            }
        ],
        nav:[
            { text: "介绍", link: "/"},
            { text: "组件", link: "/components/button"},
        ]
    },
    markdown:{
        config: (md) => {

        }
    }
})
