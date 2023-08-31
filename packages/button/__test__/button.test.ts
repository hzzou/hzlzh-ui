import { beforeEach, describe, expect, it } from "vitest";
import { shallowMount } from "@vue/test-utils"; // 从测试工具引入shallowMount
import Button from "../index";


describe("测试按钮组件",()=>{
    // 全局之前初始化
    // beforeEach(()=>{});

    it("测试按钮默认slot", ()=>{
        // shallowMount不用渲染子组件
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
        const btn = shallowMount(Button,{
            props:{
                size: "large"
            }
        });
        // 获取element
        expect(btn.get(".large")).toBeTruthy();
    });

    it("测试动态classList列表",()=>{
        const btn = shallowMount(Button,{
            props:{
                type: "default",
                size: "small"
            }
        });
        // toBe是比较原始类型和引用，toEqual是比较结构
        expect(btn.vm.classList).toEqual(["default", "small"]);
    });
});
