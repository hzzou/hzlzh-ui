import { Ref } from "vue";
import VirTableSpace from "./interface";
export declare const useCurrentIdx: () => {
    currentIdx: Ref<number>;
    setCurrentIdx: (index: number) => void;
};
export declare const useSelected: () => {
    selected: Ref<number[]>;
    setSelected: (data: number[] | number) => void;
};
export declare const useSelectedItem: () => {
    selectedItem: Ref<VirTableSpace.ItemObj[]>;
    setSelectedItem: (item: VirTableSpace.ItemObj | VirTableSpace.ItemObj[]) => void;
};
