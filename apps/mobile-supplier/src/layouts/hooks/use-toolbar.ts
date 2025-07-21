import { ref } from 'vue';

export function useToolBar() {
  const isShow = ref(false);
  function handleToolBarClick() {
    isShow.value = isShow.value ? false : true;
  }
  return {
    isShow,
    handleToolBarClick,
  };
}
