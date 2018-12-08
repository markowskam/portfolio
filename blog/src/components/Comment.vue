<template>
    <div class="c-comment">
        <div class="c-comment__content">
            <p class="c-comment__name">
               {{postComment.nick}}
            </p>
            <p class="c-comment__text">
                {{postComment.comment}}
            </p>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            postComment: {
                type: Object,
                default: () => {
                    return {};
                }
            }
        }
    }
</script>