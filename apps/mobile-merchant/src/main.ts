import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import '@frog/styles'; // 基础样式
import './assets/main.css';
import 'vant/lib/index.css';
import { createPinia } from 'pinia';

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.mount('#app');
