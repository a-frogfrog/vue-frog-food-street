import { ref, watchEffect } from 'vue';
import { useRouter } from 'vue-router';

export function useToolBar() {
  const isShow = ref(false);
  const router = useRouter();
  const title = ref();
  watchEffect(() => {
    title.value = router.currentRoute.value.meta.title;
  });

  function handleToolBarClick() {
    isShow.value = isShow.value ? false : true;
  }
  return {
    title,
    isShow,
    handleToolBarClick,
  };
}
