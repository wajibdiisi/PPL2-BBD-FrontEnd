import 'mdb-vue-ui-kit/css/mdb.min.css'
import http from './http-common';
import { store } from './store';
import Vuex from 'vuex';
import VueGoogleMaps from '@fawmi/vue-google-maps'
import axios from 'axios'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App).use(router)
app.use(store)
axios.interceptors.request.use(
    config => {
      const token = localStorage.getItem('token');
      const auth = token ? `${token}` : '';
      config.headers.common['Authorization'] = auth;
      console.log(config)
      return config;
    },
    error => Promise.reject(error),
  );
app.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyCUoE4KTUN7wRzSI-3WfsinoHDtgb6SAR0',
    },})
app.config.globalProperties.$http = http;
app.use(Vuex);

app.mount('#app')
