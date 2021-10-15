import 'mdb-vue-ui-kit/css/mdb.min.css'
import http from './http-common';
import { store } from './store';
import Vuex from 'vuex';



import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App).use(router)
app.use(store)

app.config.globalProperties.$http = http;
app.use(Vuex);

app.mount('#app')
