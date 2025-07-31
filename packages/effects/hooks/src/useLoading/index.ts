import { ElLoading } from 'element-plus';
import type { LoadingOptions } from 'element-plus';
export function useLoading() {
  let loadingInstance = null as any;
  function startLoading(options: LoadingOptions | string = {}) {
    const { text, lock, background } =
      typeof options === 'string' ? { text: options } : options;
    loadingInstance = ElLoading.service({
      lock: lock || true,
      text,
      background: background || 'rgba(0, 0, 0, 0.7)',
    });
  }

  function stopLoading() {
    loadingInstance.close();
  }

  return {
    startLoading,
    stopLoading,
  };
}
