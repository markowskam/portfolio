import Vue from 'vue';
import Vuex from 'vuex';
import * as firebase from 'firebase'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {},
    mutations: {},
    actions: {
        myFirebaseAction: ({commit}) => {
            //you can use firebase like this
            var ref = firebase.database().ref()
        }
    }
});

// const createStore = () => {
    
//     return new Vuex.Store({
    
//     state: {
//     data: [],
//     criterias: [],
//     selected_criterias: {},
//     flower_costs: {},
//     bonus_flower_costs: {},
//     }
// })
