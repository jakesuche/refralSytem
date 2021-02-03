import Vuex from 'vuex';
import Vue from 'vue'
import axios from 'axios'
import axiosInstance from '@/services/axios'

Vue.use(Vuex)


const store = new Vuex.Store({
    namespace:true,
    state:{
        user:null,
        referal:null
    },
    getters:{
        authUser(state){
            return state.user || null
        }

    },
    actions:{
        
        getReferral(context){
            return axiosInstance.get('/api/v1/referal').then((res)=>{
                
                const referral = res.data
              
                context.commit('setReferal',referral)
            })

        },
        registerUser(context,{form,query}){
            
           
            return axios.post(`/api/v1/register?reflink=${query}`, form)

        },
        loginUser(context,userData){
            return axios.post('/api/v1/login',userData).then((res)=>{
                const user = res.data;

                localStorage.setItem('username', user.fullname)
                localStorage.setItem('my-token',user.token)
                context.commit("setAuthUser", user)
                return user

            })
        },
        getAuthUser(context){
            return axiosInstance.get('/api/v1/me')
            .then((res)=>{
                const user = res.data;

                context.commit("setAuthUser", user)
            })

        }
        
    },
    mutations:{
        setAuthUser(state, user){
            return (state.user = user);
        },
        setReferal(state,referal){
            return (state.referal = referal)
        }

    }

})


export default store