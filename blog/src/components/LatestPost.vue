<template>
  <article class="c-latest-post" v-if="latestPost">
    <div class="o-container">
      <img class="c-latest-post__img" src="../assets/img/front.jpg" alt="">
    </div>
    <div class="o-container o-container--fluid">
      <div class="c-latest-post__content">
        <router-link :to="`/posts/${latestPost.category}`" class="c-latest-post__category">{{latestPost.category}}</router-link>
        <router-link :to="`/post/${latestPost.id}`">
          <h2 class="c-latest-post__title">
            {{latestPost.title}}
          </h2>
          <p class="c-latest-post__text c-latest-post__text--brief">
            {{latestPost.brief}}
          </p>
        </router-link>
      </div>
    </div>
  </article>
</template>

<script>
  export default {
    props: {
      category: {
        type: String,
        default: null
      }
    },
    computed: {
      latestPost() {
        let categoryPosts = this.$store.getters.sortedAllPosts.filter(post =>
          post.category === this.category || this.category == null
        );
        return categoryPosts[categoryPosts.length - 1]
      }
    }
  }
</script>