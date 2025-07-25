import { ref, watchEffect } from 'vue';
import { useRoute } from 'vue-router';

export function useTopNavigationBar() {
  const routeTitle = ref();
  watchEffect(() => {
    routeTitle.value = useRoute().meta.title;
  });
  return {
    routeTitle,
  };
}
