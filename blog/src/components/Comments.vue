<template>
    <div class="c-comments">
        <div class="o-container o-container--fluid">
            <div class="c-comments__header">
                <span class="c-comments__number">2</span>
                <span> comments</span>
            </div>
            <comment v-for="(postComment, index) in postComments" :key="index" :postComment="postComment"></comment>
            <add-comment :id="postId"></add-comment>
        </div>
    </div>
</template>

<script>
    import AddComment from './AddComment.vue'
    import Comment from './Comment.vue'

    export default {
        components: {
            'comment': Comment,
            'add-comment': AddComment
        },
        props: {
            postId: {
                type: Number
            }
        },
        computed: {
            postComments() {
                var posts = this.$store.state.allPosts.filter(post =>
               post.id === this.postId);
              return posts.length > 0 ? posts[0].comments : [];
            }
        }
    }
</script>