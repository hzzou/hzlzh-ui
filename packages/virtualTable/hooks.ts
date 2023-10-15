import { ref, Ref } from "vue";
import VirTableSpace from "./interface";

// ref动态变化的操作只能在setup使用,不能在render中
// 自定义钩子返回出去的时候不能使用数组模式,只能使用对象模式
// 否则打包生成声明文件时报错
export const useCurrentIdx = ()=>{
    //const currentIdx = ref<number>(-1); //泛型参数
    const currentIdx: Ref<number> = ref(-1); // 接口指定 单选选中的行索引

    const setCurrentIdx = (index: number)=>{
        currentIdx.value = index;
    };

    return {currentIdx, setCurrentIdx};
};

export const useSelected = ()=>{
    const selected = ref<number[]>([]); // 泛型指定 多选选中的行索引

    const setSelected = (data: number[] | number)=>{
        if(Array.isArray(data)){
            selected.value = data;
        }
        else{
            selected.value = selected.value.includes(data) ? selected.value.filter(ele=>ele!==data) : [...selected.value, data];
        }

    };

    return {selected, setSelected};
};

export  const useSelectedItem = ()=>{
    const selectedItem: Ref<VirTableSpace.ItemObj[]> = ref([]); // 多选选中的行数据

    const setSelectedItem = (item: VirTableSpace.ItemObj | VirTableSpace.ItemObj[])=>{
        if(Array.isArray(item)){
           selectedItem.value = item;
        }
        else{
            selectedItem.value = selectedItem.value.includes(item) ? selectedItem.value.filter(ele=>ele!==item) : [...selectedItem.value, item];
        }
    };

    return {selectedItem, setSelectedItem};
};
