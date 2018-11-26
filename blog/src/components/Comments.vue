<template>
    <div class="c-comments">
        <div class="o-container o-container--fluid">
            <div class="c-comments__header">
                <span>2</span>
                <span> comments</span>
            </div>
            <comment></comment>
        </div>
    </div>
</template>

<script>
    import Comment from './Comment.vue'
    export default {
        components: {
            'comment': Comment
        }
    }
</script>  