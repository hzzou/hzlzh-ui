import { ref, toRef } from "vue";

// ref动态变化的操作只能在setup使用,不能在render中

export const useCurrentIdx = ()=>{
    const currentIdx = ref(-1); // 单选选中的行索引

    const setCurrentIdx = (index)=>{
        currentIdx.value = index;
    };

    return [currentIdx, setCurrentIdx];
};

export const useSelected = ()=>{
    const selected = ref([]); // 多选选中的行索引

    const setSelected = (data)=>{
        if(Array.isArray(data)){
            selected.value = data;
        }
        else{
            selected.value = selected.value.includes(data) ? selected.value.filter(ele=>ele!==data) : [...selected.value, data];
        }

    };

    return [selected, setSelected];
};

export  const useSelectedItem = ()=>{
    const selectedItem = ref([]); // 多选选中的行数据

    const setSelectedItem = (item)=>{
        if(Array.isArray(item)){
           selectedItem.value = item;
        }
        else{
            selectedItem.value = selectedItem.value.includes(item) ? selectedItem.value.filter(ele=>ele!==item) : [...selectedItem.value, item];
        }
    };

    return [selectedItem, setSelectedItem];
};
