import type {Meta, StoryObj} from "@storybook/vue3";
import {Button} from "../lib/es";

const meta: Meta<typeof Button> = {
    title: "Lib/Button",
    component: Button,
    parameters:{
        layout: "center"
    },
    tags: ["autodocs"],
    argTypes: {
        name: {
            description: "按钮名字",
            defaultValue: {
                summary: '按钮'
            },
            control: false
        },
        size: {
            description: "按钮大小",
            defaultValue: {
                summary: 'primary'
            },
            control: {
                type: "select"
            },
            options: ["primary", "small"]
        }
    }
}
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {
    args:{
        name: "zzou",
        size: "primary"
    }
}



