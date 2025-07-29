import 'vue-router';

declare module 'vue-router' {
  interface RouteMeta {
    tabBarPage: boolean;
    title: string;
    isAuth: boolean;
  }
}
