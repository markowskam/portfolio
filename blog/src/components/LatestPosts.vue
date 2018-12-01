<template>
    <div>
        <latest-post :category="category"></latest-post>
        <newsletter></newsletter>
        <latest-posts-list :category="category"></latest-posts-list>
    </div>
</template>

<script>
    import LatestPost from './LatestPost.vue'
    import LatestPostsList from './LatestPostsList.vue'
    import Newsletter from './Newsletter.vue'

    export default {
        components: {
            'latest-post': LatestPost,
            'latest-posts-list': LatestPostsList,
            'newsletter': Newsletter
        },
        props: {
      category: {
        type: String,
        default: null
      }
        }
    }
</script>