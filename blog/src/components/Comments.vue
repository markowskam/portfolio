<template>
    <div class="c-comments">
        <div class="o-container o-container--fluid">
            <div class="c-comments__header">
                <span>Comments: </span>
                <span class="c-comments__number">{{commentsNumber}}</span>
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
                var post = this.$store.state.allPosts.find(p =>
               p.id === this.postId);
              return post && post.comments ? post.comments : [];
            },
            commentsNumber() {
                var post = this.$store.state.allPosts.find(p =>
               p.id === this.postId);
              return post && post.comments ? post.comments.length : 0;
            }
        }
    }
</script>