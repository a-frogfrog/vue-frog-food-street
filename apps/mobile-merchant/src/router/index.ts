import { createWebHistory, createRouter } from 'vue-router';
import routes from './routes';
import { beforeEach, afterEach } from './handler/guard';

// 创建路由实例
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// 路由守卫
router.beforeEach(beforeEach);
router.afterEach(afterEach);

export default router;
