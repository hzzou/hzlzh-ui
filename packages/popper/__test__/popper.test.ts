import { describe, it, expect, beforeAll } from "vitest";
import { mount } from "@vue/test-utils";
import Popper from "../index";


describe("测试popper组件", ()=>{
    let popper;
    beforeAll(()=>{
        popper = mount(Popper, {
            slots: {
                default: "<div style='height: 30px;'>默认slot</div>",
                content: "内容"
            },
            props: {
                place: "top-end",
                width: 200,
                title: "标题",
            },
            global:{
                config: {
                    errorHandler(err){
                        console.log("error:", err.message);
                    }
                }
            }
        });
    });

    it("测试slot", ()=>{
        expect(popper.text()).toContain("默认slot标题内容");
    });

    it("测试props", async ()=>{
        // 此处测试发现使用原生方式获取元素的相关属性有bug，不如使用ref
        // top-end
        await popper.trigger("mouseenter");
        const content = popper.find(".hz-content");
        // 行内样式才可以用attributes获取
        const style_1 = popper.find(".tip").attributes("style");

        expect(content.isVisible()).toBeTruthy();
        expect(content.attributes("style")).toContain("width: 200px");

        expect(style_1).toContain("right: 5px;");
        expect(style_1).toContain("bottom: -10px;");

        // 重新设置属性place
        // bottom
        await popper.setProps({
            place: "bottom"
        });
        await popper.trigger("mouseenter");

        const style_2 = popper.find(".tip").attributes("style");

        // bottom
        expect(style_2).toContain("left: 50%;");
        expect(style_2).toContain("top: -10px;");

        // bottom-start
        await popper.setProps({
            place: "bottom-start"
        });
        await popper.trigger("mouseenter");

        const style_3 = popper.find(".tip").attributes("style");

        expect(style_3).toContain("left: 5px;");
        expect(style_3).toContain("top: -10px;");

        // bottom-end
        await popper.setProps({
            place: "bottom-end"
        });
        await popper.trigger("mouseenter");

        const style_4 = popper.find(".tip").attributes("style");

        expect(style_4).toContain("right: 5px;");
        expect(style_4).toContain("top: -10px;");

        // top
        await popper.setProps({
            place: "top"
        });
        await popper.trigger("mouseenter");

        const style_5 = popper.find(".tip").attributes("style");

        expect(style_5).toContain("left: 50%;");
        expect(style_5).toContain("bottom: -10px;");

        // top-start
        await popper.setProps({
            place: "top-start"
        });
        await popper.trigger("mouseenter");

        const style_6 = popper.find(".tip").attributes("style");

        expect(style_6).toContain("left: 5px;");
        expect(style_6).toContain("bottom: -10px;");

        // left
        await popper.setProps({
            place: "left"
        });
        await popper.trigger("mouseenter");

        const style_7 = popper.find(".tip").attributes("style");

        expect(style_7).toContain("top: 50%;");
        expect(style_7).toContain("right: -10px;");

        // left-start
        await popper.setProps({
            place: "left-start"
        });
        await popper.trigger("mouseenter");

        const style_8 = popper.find(".tip").attributes("style");

        expect(style_8).toContain("top: 5px;");
        expect(style_8).toContain("right: -10px;");

        // left-end
        await popper.setProps({
            place: "left-end"
        });
        await popper.trigger("mouseenter");

        const style_9 = popper.find(".tip").attributes("style");

        expect(style_9).toContain("bottom: 5px;");
        expect(style_9).toContain("right: -10px;");

        // right
        await popper.setProps({
            place: "right"
        });
        await popper.trigger("mouseenter");

        const style_10 = popper.find(".tip").attributes("style");

        expect(style_10).toContain("top: 50%;");
        expect(style_10).toContain("left: -10px;");

        // right-start
        await popper.setProps({
            place: "right-start"
        });
        await popper.trigger("mouseenter");

        const style_11 = popper.find(".tip").attributes("style");

        expect(style_11).toContain("top: 5px;");
        expect(style_11).toContain("left: -10px;");

        // right-end
        await popper.setProps({
            place: "right-end"
        });
        await popper.trigger("mouseenter");

        const style_12 = popper.find(".tip").attributes("style");

        expect(style_12).toContain("bottom: 5px;");
        expect(style_12).toContain("left: -10px;");

        // mouseleave
        await popper.trigger("mouseleave");
        expect(popper.vm.showPopper).toBe(false);
    });
});
