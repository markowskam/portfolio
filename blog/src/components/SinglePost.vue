<template>
    <article class="c-latest-post o-theme" :class="theme" v-if="singlePost" >
        <div class="o-container o-container--fluid">
            <img class="c-latest-post__img" :src="singlePost.img2" alt="">
        </div>
        <div class="o-container o-container--fluid">
            <div class="o-grid-row">
                <div class="c-latest-post__content o-grid-row__item o-grid-row__item--3-2 u-text--padded-top-xl u-text--padded-bottom-xl">
                    <a href="" class="c-latest-post__category">
                        {{singlePost.category}}
                    </a>
                    <h2 class="c-latest-post__title">
                       {{singlePost.title}}
                    </h2>
                    <p class="c-latest-post__text c-latest-post__text--brief">
                        {{singlePost.brief}}
                    </p>
                    <p class="c-latest-post__text">
                        {{singlePost.text}}
                    </p>
                </div>
                <about-me></about-me>
            </div>
        </div>
        <top-posts></top-posts>
        <comments :postId="id"></comments>
    </article>
</template>

<script>
    import AboutMe from './AboutMe.vue'
    import TopPosts from './TopPosts.vue'
    import Comments from './Comments.vue'
    export default {
        components: {
            'about-me': AboutMe,
            'top-posts': TopPosts,
            'comments': Comments
        },
        props: {
            id: {
                type: Number
            }
        },
        computed: {
            singlePost() {
                return this.$store.state.allPosts.find(post => post.id === this.id);
            },
            theme(){
                 return "o-theme--" + this.$store.state.allPosts.find(post => post.id === this.id).category;
            }
        }
    }
</script>