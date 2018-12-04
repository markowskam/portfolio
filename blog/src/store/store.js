import Vue from 'vue';
import Vuex from 'vuex';

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
        fetchAllPosts({commit}) {
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
        sortedAllPosts(state) {
            var comparePost = function (a, b) {
                return a.id < b.id ? -1 : (a.id > b.id ? 1 : 0);
            }
            return state.allPosts.sort(comparePost);
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