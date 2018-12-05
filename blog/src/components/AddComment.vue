<template>
     <div class="c-add-comment">
            <button class="c-add-comment__add-comment" @click="toggle">Add a comment</button>
            <form action="" class="c-add-comment__form o-flex o-flex--column o-flex--left" v-if="clicked">
                <input type="text" class="c-add-comment__nick" placeholder="Your nick"/>
                <textarea class="c-add-comment__comment" name="" id="" cols="30" rows="10" placeholder="Add comment">
                </textarea> 
                <input class="c-add-comment__button c-button" type="submit" value="Add">
            </form>
        </div>
</template>
<script>
export default {
    data() {
        return {
            clicked: false
        }
    },
    methods: {
        toggle() {
            this.clicked = true;
        }
    }
    
}
</script>

