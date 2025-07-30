import { ref } from 'vue';

export function useSideNavigation() {
  const isShow = ref(false);

  const toggleSideNavigation = () => {
    isShow.value = !isShow.value;
    console.log(isShow.value);
  };
  return {
    isShow,
    toggleSideNavigation,
  };
}
