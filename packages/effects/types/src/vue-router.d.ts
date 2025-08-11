import 'vue-router';

declare module 'vue-router' {
  interface RouteMeta {
    tabBarPage?: boolean;
    topBarPage?: boolean;
    title: string;
    isAuth?: boolean;
  }
}
