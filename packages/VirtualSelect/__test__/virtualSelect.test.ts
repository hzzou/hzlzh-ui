import { describe, it, expect, beforeAll, vi } from "vitest";
import {mount} from "@vue/test-utils";
import VirtualSelect from "../index";

describe("测试virtualSelect组件", ()=>{
    const data = [];
    beforeAll(()=>{
        for(let i = 0; i < 10000; i++){
            data.push({
                name: "name_" + (i + 1),
                value: "value_" + (i + 1)
            });
        }
    });

    it("测试props", async ()=>{
        const handleScroll = vi.fn(ev=>console.log(ev));
        const select = mount(VirtualSelect, {
            props: {
                listData: data,
                onScroll: (event)=>{
                    // 触发组件中的自定义事件scroll
                    handleScroll(event);
                }
            }
        });

        expect(select.get(".input").attributes("style")).toContain("width: 300px; height: 40px");

        // 触发下拉框
        await select.find(".input").trigger("focus");
        expect(select.get(".option").attributes("style")).toContain("height: 200px");

        // 触发滚动
        await select.find(".list").trigger("scroll");
        expect(handleScroll).toBeCalled();

        // 触发选择
        const item = select.findAll(".item")[4];
        await item.trigger("click");
        expect(select.get(".selected")).toBeTruthy();
    });
});
