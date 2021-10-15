
import { createStore } from "vuex"
import axios from 'axios'
import createPersistedState from "vuex-persistedstate";

export const store = createStore({
    state: {
        status: '',
        token: localStorage.getItem('token') || '',
        user: null,
        isLoading: false,
        isLoggedIn: false,
        isNotification : false,
        msgData : '', 
    },plugins: [createPersistedState()],
    mutations: {
        set_user (state, data) {
            state.user = data
            state.isLoggedIn = true
          }, 
          reset_user (state) {
            state.user = null
            state.isLoggedIn = false
          },
        auth_request(state) {
            state.status = 'loading'
        },
        auth_success(state, token, user) {
            state.status = 'success'
            state.token = token
            state.user = user
        },
        auth_error(state) {
            state.status = 'error'
        },
        logout(state) {
            state.status = ''
            state.token = ''
        },
        get_breeds(state,payload){
            state.breeds = payload
        },
        set_loading(state,data){
          state.isLoading = data
        },
        set_notification(state,data){
            /*if(state.isNotification == true){
                state.isNotification = false;
                setTimeout(() => state.isNotification = true,2000);
            }else{
                state.isNotification = true
            }*/
            state.isNotification = true
            state.msgData = data
        },
        set_notificationLogin(state,data){
            /*if(state.isNotification == true){
                state.isNotification = false;
                setTimeout(() => state.isNotification = true,5000);
            }else{
                state.isNotification = true
            }*/
            state.isNotification = true
            state.msgData = data
        },
        delete_notification(state){
            state.isNotification = false,
            state.msgData = ""
        }
    },
    actions: {
        notificationMessage({commit}, data){
            commit('set_notification', data)
        },
        notificationMessageLogin({commit}, data){
            commit('set_notificationLogin', data)
        },
        disableNotification({commit}){
            commit('delete_notification');
        },
        login({ dispatch, commit }, data) {
            return new Promise((resolve, reject) => { 
              axios.post(process.env.VUE_APP_ROOT_API + 'users/login', data)
               .then(response => {
                 const token = response.data.token  
                 localStorage.setItem('token', token) 
                 axios.defaults.headers.common['Authorization'] = token
                 console.log(token)
                 dispatch('get_user')
                 resolve(response)
               })
               .catch(err => {
                 commit('reset_user')  
                 localStorage.removeItem('token')
                 reject(err)
              })
            })
          },
          async get_user({commit}){ 
            if(!localStorage.getItem('token')){
              return
            }
            try{ 
              let response = await axios.get(process.env.VUE_APP_ROOT_API + 'users/profile')
                commit('set_user', response.data)
            } catch (error){
                commit('reset_user') 
                delete axios.defaults.headers.common['Authorization']
                localStorage.removeItem('token')
                return error
            } 
          },
        register({
            commit
        }, user) {
            return new Promise((resolve, reject) => {
                commit('auth_request')
                axios({
                        url: process.env.VUE_APP_ROOT_API + 'users/register',
                        data: user,
                        method: 'POST'
                    })
                    .then(resp => {
                        const token = resp.data.token
                        const user = resp.data.user
                        localStorage.setItem('token', token)
                        // Add the following line:
                        axios.defaults.headers.common['Authorization'] = token
                        commit('auth_success', token, user)
                        resolve(resp)
                    })
                    .catch(err => {
                        commit('auth_error', err)
                        localStorage.removeItem('token')
                        reject(err)
                    })
            })
        },
        logout({ commit }) {
            return new Promise((resolve) => {
             commit('reset_user')
             localStorage.removeItem('token')
             delete axios.defaults.headers.common['Authorization']
             resolve()
            })
        }
    },
    getters: {
        isLoading(state){
          return state.isLoading
        },
        isNotification(state){
            return state.isNotification
        },
        notificationData(state){
            return state.msgData
        },
        isLoggedIn (state){
            return state.isLoggedIn
          },
          user (state) {
            if(state.user != null){
            return state.user
            }else {
                return 'guest'
            }
          }
        /*isLoggedIn: state => !!state.token,
        authStatus: state => state.status,*/
    }
})