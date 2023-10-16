import { describe, it, expect} from "vitest";
import {mount} from "@vue/test-utils";
import Dialog from "../index.vue";

describe("测试dialog组件", ()=>{

    it("测试slot", async ()=>{
        const dialog = mount(Dialog, {
            slots: {
                header: "<div>测试标题</div>",
                default: "<div>默认slot</div>",
                footer: "<div>测试footer</div>"
            }
        });

        await dialog.setProps({modelValue: true});

        expect(dialog.emitted().open[0][0]).toEqual({"show": true});
        expect(dialog.text()).toContain("测试标题默认slot测试footer");
    });

    it("测试props", async ()=>{
        const dialog = mount(Dialog, {
            props: {
                title: "hzlzh",
                width: 300,
                height: 200
            }
        });
        await dialog.setProps({modelValue: true});

        expect(dialog.text()).toContain("hzlzh");
        expect(dialog.get(".hz-content").attributes("style")).toContain("width: 300px; height: 200px");

        await dialog.find(".close").trigger("click");

        expect(dialog.emitted().close[0][0]).toEqual({"show": false});


        await dialog.setProps({modal: false, modelValue: true});

        expect(dialog.find(".hz-wrap").text()).toBeTruthy();
    });
});
