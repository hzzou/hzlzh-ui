import type {Meta, StoryObj} from "@storybook/vue3";
import {Input} from "../lib/es";

const meta: Meta<typeof Input> = {
    title: "Lib/Input",
    component: Input,
    parameters: {
        layout: "center"
    },
    tags: ["autodocs"],
    argTypes: {
        model: {
            description: "输入值",
            defaultValue: null,
            control: false
        }
    }
}

export default meta;

export const Default = {
    args: {
        model: "hzlzh"
    }
}
