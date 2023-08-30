import {describe, expect, it} from "vitest";
import {shallowMount, mount, } from "@vue/test-utils"; // 从测试工具引入mount
import Button from "../index";

describe("测试按钮组件",()=>{

    it("测试按钮默认slot", ()=>{
        const btn = shallowMount(Button,{
            slots: {
                default: "hzlzh"
            }
        });

        expect(btn.text()).toEqual("hzlzh");
    });

    it("测试按钮type", ()=>{
        const btn = shallowMount(Button,{
            props:{
                type: "primary"
            }
        });
        // 因为类型都是反映在css样式上
        expect(btn.get(".primary")).toBeTruthy();
    });

    it("测试按钮size", ()=>{
        const btn = mount(Button, {
            props:{
                size: "large"
            }
        });

        // 获取element
        expect(btn.get(".large")).toBeTruthy();
    });
});
