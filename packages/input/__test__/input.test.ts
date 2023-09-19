import { describe, expect, it } from "vitest";
import { mount, shallowMount } from "@vue/test-utils";
import Input from "../index";

describe("测试Input组件", ()=>{
    it("测试slot", ()=>{
        const input = shallowMount(Input, {
            slots: {
                prepend: "前置",
                prefix: "前缀",
                append: "后置",
                suffix: "后缀"
            }
        });

        expect(input.text()).toContain("前置");
        expect(input.text()).toContain("前缀");
        expect(input.text()).toContain("后置");
        expect(input.text()).toContain("后缀");
    });
    it("测试type, size, disabled, readonly", ()=>{
        const input = shallowMount(Input, {
            props: {
                type: "text",
                size: "large",
                disabled: true,
                readonly: true,
            }
        });


        expect(input.get(".hz-input")).toBeTruthy();
        expect(input.get(".large")).toBeTruthy();
        expect(input.get("input:disabled")).toBeTruthy();
        expect(input.get("input:readonly")).toBeTruthy();
    });
    it("测试prefixIcon和suffixIcon", ()=>{
        // 此处要获取子组件，不能浅挂载
        const input = mount(Input, {
            props: {
                prefixIcon: "user",
                suffixIcon: "search"
            }
        });

        expect(input.get(".icon-user")).toBeTruthy();
        expect(input.get(".icon-search")).toBeTruthy();
    });
});
