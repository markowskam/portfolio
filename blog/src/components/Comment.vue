<template>
    <div class="c-comment">
        <div class="c-comment__content">
            <p class="c-comment__name">John Doe</p>
            <p class="c-comment__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia doloremque accusantium excepturi, eius repudiandae ex laboriosam, accusamus quae deleniti quam nisi autem unde! Voluptas accusantium cupiditate dolore corrupti minus non.
            </p>
        </div>
       <add-comment></add-comment>
    </div>
</template>
<script>
import AddComment from './AddComment.vue'
export default {
    components: {
        'add-comment' : AddComment
    }
}
</script>

