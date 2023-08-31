import { describe, expect, it } from "vitest";
import {shallowMount} from "@vue/test-utils";
import Icon from "../index";

describe("测试Icon组件", ()=>{
    it("测试name属性", ()=>{
        const icon = shallowMount(Icon, {
            props: {
                name: "help"
            }
        });

        expect(icon.get(".icon-help")).toBeTruthy();
    });

    it("测试color属性", ()=>{
        const icon = shallowMount(Icon, {
            props: {
                color: "#f00"
            }
        });

        expect(icon.attributes("style")).toContain("color: #f00");
    });

    it("测试size属性", ()=>{
        const icon = shallowMount(Icon, {
            props: {
                size: 20
            }
        });

        expect(icon.attributes("style")).toContain("font-size: 20px");
    });

});
