import { ref } from "vue";
const useCurrentIdx = () => {
  const currentIdx = ref(-1);
  const setCurrentIdx = (index) => {
    currentIdx.value = index;
  };
  return [currentIdx, setCurrentIdx];
};
const useSelected = () => {
  const selected = ref([]);
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
  const selectedItem = ref([]);
  const setSelectedItem = (item) => {
    if (Array.isArray(item)) {
      selectedItem.value = item;
    } else {
      selectedItem.value = selectedItem.value.includes(item) ? selectedItem.value.filter((ele) => ele !== item) : [...selectedItem.value, item];
    }
  };
  return [selectedItem, setSelectedItem];
};
export {
  useCurrentIdx,
  useSelected,
  useSelectedItem
};
