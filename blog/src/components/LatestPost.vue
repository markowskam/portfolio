<template>
  <article class="c-latest-post">
    <div class="o-container">
      <img class="c-latest-post__img" src="../assets/img/front.jpg" alt="">
    </div>
    <div class="o-container o-container--fluid">
      <div class="c-latest-post__content">
        <a href="" class="c-latest-post__category">
          {{latestPost.category}}
        </a>
        <router-link :to="`/post/${latestPost.id}`">
          <h2 class="c-latest-post__title">
            {{latestPost.title}}
          </h2>
          <p class="c-latest-post__text">
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
      category: String
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