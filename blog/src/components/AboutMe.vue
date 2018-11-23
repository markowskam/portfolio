<template>
    <aside class="o-grid-row__item o-grid-row__item--3-1">
        <div class="c-about-me">
            <div class="c-about-me__img-box">
                <img class="c-about-me__img" src="../assets/img/my-photo_1.jpg" alt="">
            </div>
            <h2 class="c-about-me__title">About me</h2>
            <p class="c-about-me__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nostrum ducimus obcaecati minus assumenda! Ab libero,
                itaque animi vel magnam, cum nobis, reprehenderit nulla ex similique eligendi numquam velit cupiditate?</p>
            <div class="c-about-me__social-media">
                <a href="" class="c-about-me__social-icon">
                   <i class="fab fa-facebook-f"></i>
                </a>
                <a href="" class="c-about-me__social-icon">
                    <i class="fab fa-instagram"></i>
                </a>
                <a href="" class="c-about-me__social-icon">
                    <i class="fab fa-pinterest-p"></i>
                </a>
            </div>
        </div>
        <banner></banner>
    </aside>
</template>
<script>
    import Banner from './Banner.vue'
    export default {
        components: {
            'banner': Banner
        }
    }
</script>