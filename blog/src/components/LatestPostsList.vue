<template>
    <div class="o-container o-container--fluid">
        <div class="o-grid-row" v-for="(postPair, index) in latestPostsPairs" :key="index">
            <div class="o-grid-row__item o-grid-row__item--half" v-for="latestPost in postPair" :key="latestPost.id">
                <article class="c-latest-post o-theme" :class="theme + latestPost.category">
                    <router-link :to="`/post/${latestPost.id}`">
                        <div class="c-latest-post__img-box">
                            <img class="c-latest-post__img" :src="latestPost.img1" alt="">
                        </div>
                    </router-link>
                    <div class="c-latest-post__content">
                        <router-link :to="`/posts/${latestPost.category}`" class="c-latest-post__category">
                            {{latestPost.category}}
                        </router-link>
                        <router-link :to="`/post/${latestPost.id}`">
                            <h2 class="c-latest-post__title">
                                {{latestPost.title}}
                            </h2>
                            <p class="c-latest-post__text c-latest-post__text--brief">
                                {{latestPost.brief.slice(0, 120) + '...'}}
                            </p>
                        </router-link>
                    </div>
                </article>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            category: {
                type: String,
                default: null
            }
        },
        data() {
            return {
                theme: "o-theme--"
            }
        },
        computed: {
            latestPostsPairs() {
                let categoryPosts = this.$store.getters.sortedAllPosts.filter(post =>
                    post.category === this.category || this.category == null
                );
                return categoryPosts.slice(1, categoryPosts.length - 1)
                    .reduce(function (result, value, index, array) {
                        if (index % 2 === 0)
                            result.push(array.slice(index, index + 2));
                        return result;
                    }, []);
            }
        }

    }
</script>