import type {Meta, StoryObj} from "@storybook/vue3";
import {Button} from "../lib/es";

const meta: Meta<typeof Button> = {
    title: "Lib/Button",
    component: Button,
    parameters:{
        layout: "center",
        actions: {
            handles: ["onClick"]
        }
    },
    tags: ["autodocs"],
    argTypes: {
        name: {
            description: "按钮名字",
            defaultValue: {
                summary: '按钮'
            },
            control: {
                type: "text",
                resize: "none"
            }
        },
        size: {
            description: "按钮大小",
            defaultValue: {
                summary: 'default'
            },
            control: {
                type: "select"
            },
            options: ["small", "default", "large"]
        },
        type: {
            description: "按钮类型",
            defaultValue: {
                summary: "default"
            },
            control: {
                type: "select"
            },
            options: ["primary", "default"]
        },
    }
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
    args:{
        name: "按钮",
        size: "default",
        type: "default"
    }
}



