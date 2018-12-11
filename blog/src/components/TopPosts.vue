<template>
    <div class="c-top-posts">
        <div class="o-container o-container--fluid">
            <h3 class="c-top-posts__header">Top posts</h3>
            <div class="o-grid-row">
                <div class="o-grid-row__item o-grid-row__item--3-1" v-for="(topPost, index) in topPosts" :key="index">
                    <div class="c-top-posts__img-box">
                        <img :src="topPost.img2" alt="" class="c-top-posts_img">
                    </div>
                    <h2 class="c-top-posts__title">{{topPost.title}}</h2>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            postId: {
                type: Number
            }
        },
        computed: {
            topPosts() {
                let compareCommentsNumber = function (a, b) {
                    let aLength = a.comments ? a.comments.length : 0;
                    let bLength = b.comments ? b.comments.length : 0;
                    return aLength < bLength ? -1 : (aLength > bLength ? 1 : 0);
                };
                let currentCategory = this.$store.state.allPosts.find(post => post.id === this.postId).category;
                return this.$store.state.allPosts.filter(post =>
                    post.category === currentCategory
                ).sort(compareCommentsNumber).slice(0, 3);
            }
        }
    }
</script>