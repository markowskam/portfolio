<template>
    <div class="latest-posts">
        <latest-post></latest-post>
        <latest-posts-list></latest-posts-list>
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
