import 'vue-router';

declare module 'vue-router' {
  interface RouteMeta {
    title?: string;
    requiresAuth?: boolean; // 是否需要登录
    icon?: string;
    title?: string;
  }
}
