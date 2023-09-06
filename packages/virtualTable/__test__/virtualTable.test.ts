import { describe, it, expect, beforeEach } from "vitest";
import {mount, shallowMount} from "@vue/test-utils";
import VirtualTable from "../index";

describe("测试virtualTable组件", ()=>{


    it("测试slot", ()=>{
        // shallowMount不会渲染子组件
        const table = shallowMount(VirtualTable, {
            slots: {
                empty: "没数据"
            }
        });
        // console.log(table.text());
        expect(table.text()).toEqual("没数据");
    });
    it("测试props", async ()=>{
        const data = [];
        for (let i = 0; i < 10000; i++) {
            data.push({
                name: "name_" + (i + 1),
                date: "date_" + (i + 1),
                address: "address_" + (i + 1),
                state: "state_" + (i + 1),
            });
        }

        const table = mount(VirtualTable, {
            props: {
                tableData: data
            }
        });

        expect(table.get(".table").attributes("style")).toContain("height: 400px");
        expect(table.get(".th").attributes("style")).toContain("height: 40px");


        // console.log(table.vm.itemData);
        await table.trigger("onscroll");
        const tr = table.findAll(".tr");

        // console.log("1:",tr[0].attributes("style"));
        // console.log("2:",tr[1].attributes("style"));
        expect(tr[0].attributes("style")).toContain("text-align: left");
    });
});
