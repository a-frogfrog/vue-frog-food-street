import { ref, watchEffect } from 'vue';
import { useRoute } from 'vue-router';

/**
 *  hook: 获取当前路由标题
 * @returns routeTitle 当前路由标题
 */
export function useTopNavigationBar() {
  const routeTitle = ref();
  const route = useRoute();
  watchEffect(() => {
    routeTitle.value = route.meta.title;
  });
  return {
    routeTitle,
  };
}
