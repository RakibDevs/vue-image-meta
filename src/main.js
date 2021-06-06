import { createApp } from 'vue'
import App from './App.vue'


import Axios from 'axios';
import store       from './store';
import router      from './router';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import './assets/css/style.css';


const app = createApp(App);
app.config.globalProperties.$http = Axios;


app.config.devtools = true;
app
.use(router)
.use(store)
.mount('#app')
