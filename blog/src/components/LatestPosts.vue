<template>
    <div>
        <latest-post></latest-post>
        <latest-posts-list class="o-container o-container--fluid"></latest-posts-list>
    </div>
</template>

<script>
import LatestPost from './LatestPost.vue'
import LatestPostsList from './LatestPostsList.vue'

export default {
      components: {
      'latest-post': LatestPost,
      'latest-posts-list': LatestPostsList
    }
}
</script>
