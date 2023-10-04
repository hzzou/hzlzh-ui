"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const vue = require("vue");
const useCurrentIdx = () => {
  const currentIdx = vue.ref(-1);
  const setCurrentIdx = (index) => {
    currentIdx.value = index;
  };
  return [currentIdx, setCurrentIdx];
};
const useSelected = () => {
  const selected = vue.ref([]);
  const setSelected = (data) => {
    if (Array.isArray(data)) {
      selected.value = data;
    } else {
      selected.value = selected.value.includes(data) ? selected.value.filter((ele) => ele !== data) : [...selected.value, data];
    }
  };
  return [selected, setSelected];
};
const useSelectedItem = () => {
  const selectedItem = vue.ref([]);
  const setSelectedItem = (item) => {
    if (Array.isArray(item)) {
      selectedItem.value = item;
    } else {
      selectedItem.value = selectedItem.value.includes(item) ? selectedItem.value.filter((ele) => ele !== item) : [...selectedItem.value, item];
    }
  };
  return [selectedItem, setSelectedItem];
};
exports.useCurrentIdx = useCurrentIdx;
exports.useSelected = useSelected;
exports.useSelectedItem = useSelectedItem;
