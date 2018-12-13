import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        allPosts: [],
    },
    mutations: {
        FETCH_ALL_POSTS(state, latestPosts) {
            state.allPosts = latestPosts;
        },
        UPDATE_COMMENTS(state, payload){
            let id = payload.postId;
            let newComment = payload.newComment;
            let post = state.allPosts.find(post =>
            post.id === id);
            if (post.comments === undefined) {
                // typeOf(post.comments) == ;
                // Object.assign({comments: []}, post)
                // post.comments = [];
                Object.defineProperty(post, "comments", {value: []});
                // post.comments=Array(0);
            }
            alert(post.comments);
            post.comments.push(newComment);
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
        },
        updateComments({commit}, payload) {
            commit('UPDATE_COMMENTS', payload);
        }
    },
    getters: {
        sortedAllPosts(state) {
            let comparePost = function (a, b) {
                return a.id < b.id ? -1 : (a.id > b.id ? 1 : 0);
            }
            return state.allPosts.sort(comparePost);
        }
    }

});