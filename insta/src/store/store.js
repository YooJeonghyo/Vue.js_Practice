import Vue from 'vue';
import Vuex from 'vuex';
import data from '../data.js'

Vue.use(Vuex);

export let store = new Vuex.Store({
    state: {
        postData: data
    },
    getter: {
        POSTDATA(state){
            return state.postData
        }
    },
    mutations: {},
    actions: {}
})