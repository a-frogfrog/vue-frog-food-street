// import Lenis from '@studio-freight/lenis';
import { ref } from 'vue';

export function useSmoothScroll() {
  const lenis = ref();

  const destroy = () => {
    lenis.value.destroy();
  };

  return {
    lenis,
    destroy,
  };
}
