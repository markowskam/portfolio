<template>
    <div class="o-container o-container--fluid">
        <div class="o-grid-row">
            <div class="o-grid-row__item o-grid-row__item--half">
                <article class="c-latest-post">
                    <div class="c-latest-post__img-box">
                        <img class="c-latest-post__img" src="../assets/img/front.jpg" alt="">
                    </div>
                    <div class="c-latest-post__content">
                        <a href="" class="c-latest-post__category">
                            Lifestyle
                        </a>
                        <router-link to="'/post/' + latestPost.id" exact>
                            <h2 class="c-latest-post__title">
                                The perfect weekend getaway
                            </h2>
                            <p class="c-latest-post__text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis culpa expedita mollitia dolorum perspiciatis dignissimos
                                accusantium illum? Aut assumenda odio qui nobis ipsum laboriosam, labore vero! Minima ipsum
                                consequuntur amet.Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis culpa
                                expedita mollitia dolorum perspiciatis dignissimos accusantium illum? Aut assumenda odio
                                qui nobis ipsum laboriosam, labore vero! Minima ipsum consequuntur amet.Lorem ipsum dolor
                                sit amet consectetur adipisicing

                            </p>
                        </router-link>
                    </div>
                </article>
            </div>
            <!-- <div class="o-grid-row__item o-grid-row__item--half">
                <article class="c-latest-post">
                    <div class="c-latest-post__img-box">
                        <img class="c-latest-post__img" src="../assets/img/test.jpg" alt="">
                    </div>
                    <div class="c-latest-post__content">
                        <a href="" class="c-latest-post__category">
                            Lifestyle
                        </a>
                        <a href="">
                            <h2 class="c-latest-post__title">
                                The perfect weekend getaway
                            </h2>
                            <p class="c-latest-post__text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis culpa expedita mollitia dolorum perspiciatis dignissimos
                                accusantium illum? Aut assumenda odio qui nobis ipsum laboriosam, labore vero! Minima ipsum
                                consequuntur amet.Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis culpa
                                expedita mollitia dolorum perspiciatis dignissimos accusantium illum? Aut assumenda odio
                                qui nobis ipsum laboriosam, labore vero! Minima ipsum consequuntur amet.Lorem ipsum dolor
                                sit amet consectetur adipisicing

                            </p>
                        </a>
                    </div>
                </article>
            </div> -->
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>