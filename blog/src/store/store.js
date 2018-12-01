import Vue from 'vue';
import Vuex from 'vuex';
//import * as firebase from 'firebase'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        allPosts: []
    },
    mutations: {
        FETCH_ALL_POSTS(state, latestPosts) {
            state.allPosts = latestPosts;
        }
    },
    actions: {
        fetchAllPosts({ commit }) {
            return new Promise((resolve) => {
                Vue.http.get("https://portfolio-blog-c7083.firebaseio.com/posts.json")
                    .then((response) => {
                        commit('FETCH_ALL_POSTS', response.body);
                        resolve();
                    })
                    .catch((error => {
                        alert(error.statusText);
                        //console.log(error.statusText);
                    }));
            });
    }
},
getters: {
    getCategories(state) {
        let posts = state.allPosts;
        let categories = [];
        posts.forEach(element => {
            categories.push(element.category)

        });
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