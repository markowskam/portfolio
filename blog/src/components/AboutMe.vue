<template>
    <aside class="o-grid-row__item o-grid-row__item--3-1">
        <div class="c-about-me">
            <div class="c-about-me__img-box">
                <img class="c-about-me__img" src="../assets/img/my-photo_1.jpg" alt="">
            </div>
            <h2 class="c-about-me__title">About me</h2>
            <p class="c-about-me__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nostrum ducimus obcaecati minus assumenda! Ab libero,
                itaque animi vel magnam, cum nobis, reprehenderit nulla ex similique eligendi numquam velit cupiditate?</p>
            <div class="c-social-icons o-flex o-flex--justify-right">
                <a href="" class="c-social-icons__icon">
                   <i class="fab fa-facebook-f"></i>
                </a>
                <a href="" class="c-social-icons__icon">
                    <i class="fab fa-instagram"></i>
                </a>
                <a href="" class="c-social-icons__icon">
                    <i class="fab fa-pinterest-p"></i>
                </a>
            </div>
        </div>
        <!-- <banner></banner> -->
    </aside>
</template>
<script>
    // import Banner from './Banner.vue'
    export default {
        // components: {
        //     'banner': Banner
        // }
        props: {
            postId: {
                type: Number
            }
        },
        computed: {
            postCategory() {
                return this.$store.state.allPosts.find(post => post.id === this.postId).category;
            }
        }
    }
</script>

