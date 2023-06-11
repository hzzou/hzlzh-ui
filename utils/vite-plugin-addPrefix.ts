import type {Plugin} from "vite";
import {parse, compileScript} from "vue/compiler-sfc";

export default function vitePluginAddPrefix (): Plugin {
    return {
        name: "vite-plugin-addPrefix",
        enforce: "pre",
        apply: "build",
        transform(code){
            // console.log(code)
            const {descriptor} = parse(code);
            if(!descriptor.script && descriptor.scriptSetup){
                console.log(descriptor.scriptSetup)
            }
            //const reg = //;
        }
    }
}
