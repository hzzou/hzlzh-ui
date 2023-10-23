import { describe, it, expect, beforeEach, beforeAll, vi } from "vitest";
import {mount, shallowMount} from "@vue/test-utils";
import VirtualTable from "../index";


describe("测试virtualTable组件", ()=>{
    const data = [];
    beforeAll(()=>{
        for (let i = 0; i < 10000; i++) {
            data.push({
                name: "name_" + (i + 1),
                date: "date_" + (i + 1),
                address: "address_" + (i + 1),
                state: "state_" + (i + 1),
            });
        }
    });

    it("测试slot", ()=>{
        // shallowMount不会渲染子组件
        const table = shallowMount(VirtualTable, {
            slots: {
                empty: "没数据"
            }
        });

        expect(table.text()).toEqual("没数据");
    });
    it("测试props", async ()=>{
        const table = mount(VirtualTable, {
            props: {
                tableData: data
            }
        });

        expect(table.get(".table").attributes("style")).toContain("height: 400px");
        expect(table.get(".th").attributes("style")).toContain("height: 40px");


        //  测死表格渲染正常
        const tr = table.findAll(".tr");
        expect(tr[3].attributes("style")).toContain("text-align: left");
    });

    it("测试单选", async ()=>{
        const handleScroll = vi.fn(ev=>console.log("table:",ev));
        const table = await mount(VirtualTable, {
            props: {
                tableData: data,
                openSelect: true,
                onScroll: (event)=>{
                    handleScroll(event);
                }
            }
        });

        // 测试滑动
        await table.find(".table").trigger("scroll");
        expect(handleScroll).toBeCalled();

        const tr = table.findAll(".tr");

        // 选中第三行
        await tr[3].trigger("click");
        expect(table.vm!.currentIdx).toEqual(2);

        // 表头取消选中
        await tr[0].trigger("click");
        expect(table.vm!.currentIdx).toEqual(-1);

        // 测试点击行的checkbox
        const checkbox = table.findAll(".checkbox");

        await checkbox[5].trigger("click");
        expect(table.vm!.currentIdx).toEqual(4);

        // 表头取消选中
        await checkbox[0].trigger("click");
        expect(table.vm!.currentIdx).toEqual(-1);
    });

    it("测试多选", async ()=>{
        const table = await mount(VirtualTable, {
            props: {
                tableData: data,
                openSelect: true,
                multiSelect: true
            }
        });

        // 测试滑动
        await table.find(".table").trigger("scroll");

        const tr = table.findAll(".tr");
        // 测试点击行多选
        await tr[3].trigger("click");
        await tr[4].trigger("click");
        await tr[5].trigger("click");
        expect(table.vm!.selected.length).toEqual(3);

        // 测试表头取消多选
        await tr[0].trigger("click");
        expect(table.vm!.selected.length).toEqual(0);

        // 测试点击行的checkbox
        const checkbox = table.findAll(".checkbox");

        await checkbox[3].trigger("click");
        await checkbox[4].trigger("click");
        await checkbox[5].trigger("click");
        await checkbox[6].trigger("click");
        expect(table.vm!.selected.length).toEqual(4);

        // 测试表头取消多选
        await checkbox[0].trigger("click");
        expect(table.vm!.selected.length).toEqual(0);

        // 测试表头全选
        await checkbox[0].trigger("click");
        expect(table.vm!.selected.length).toEqual(table.vm!.itemCount);
        await checkbox[0].trigger("click"); // 取消全选,避免影响下次

        // 触发表头
        const thead = table.find(".thead");
        await thead.trigger("click");
        expect(table.vm!.selected.length).toEqual(table.vm!.itemCount);
    });
});
