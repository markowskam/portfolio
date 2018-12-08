<template>
    <div class="c-add-comment">
        
        <p class="c-add-comment__thanks" v-if="newCommentAdded">Thank you for your comment.</p>
        <button class="c-add-comment__add-comment" @click="toggle">
            Add a comment
        </button>
        <form action="" class="c-add-comment__form o-flex o-flex--column o-flex--left" v-if="clicked">
            <input type="text" class="c-add-comment__nick" placeholder="Your nick" v-model="newComment.nick" />
            <textarea class="c-add-comment__comment" name="" id="" cols="30" rows="10" placeholder="Add comment" v-model="newComment.comment">
            </textarea>
            <input class="c-add-comment__button c-button" type="submit" value="Add" @click.prevent="addComment">
        </form>
    </div>
</template>
<script>
    export default {
        props: {
            id: {
                type: Number
            }
        },
        data() {
            return {
                clicked: false,
                newCommentAdded: false,
                newComment: {
                    nick: "",
                    comment: "",
                }
            }
        },
        methods: {
            toggle() {
                this.clicked = true;
            },
            addComment() {
                this.newCommentAdded = true;
                this.clicked = false;
                let commentClone = Object.assign( {}, this.newComment);
                this.$store.dispatch('updateComments',{postId: this.id, newComment: commentClone});
                this.newComment.nick="";
                this.newComment.comment="";
            }

        }
    }
</script>