import { createApp } from 'vue';
import App from './App.vue';

// 故意的格式问题：双引号和单引号混用，分号不统一
const app = createApp(App);

app.mount('#app');
