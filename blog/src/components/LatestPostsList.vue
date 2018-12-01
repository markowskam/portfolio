<template>
    <div class="o-container o-container--fluid">
        <div class="o-grid-row"  v-for="(postPair, index) in latestPostsPairs" :key="index">
            <div class="o-grid-row__item o-grid-row__item--half" v-for="latestPost in postPair" :key="latestPost.id">
                <article class="c-latest-post">
                    <div class="c-latest-post__img-box">
                        <img class="c-latest-post__img" src="../assets/img/front.jpg" alt="">
                    </div>
                    <div class="c-latest-post__content">
                        <a href="" class="c-latest-post__category">
                            {{latestPost.category}}
                        </a>
                        <router-link :to="`/post/${latestPost.id}`">
                            <h2 class="c-latest-post__title">
                                {{latestPost.title}}
                            </h2>
                            <p class="c-latest-post__text c-latest-post__text--brief">
                                {{latestPost.brief}}
                            </p>
                            <p class="c-latest-post__text">
                                {{latestPost.text}}
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
        props: {
      category: {
        type: String,
        default: null
      }
        },
        computed: {
            latestPostsPairs() {
                let categoryPosts = this.$store.getters.sortedAllPosts.filter(post =>
                    post.category === this.category || this.category == null
                );
                return categoryPosts.slice(1, categoryPosts.length - 1)
                    .reduce(function (result, value, index, array) {
                        if (index % 2 === 0)
                            result.push(array.slice(index, index + 2));
                        return result;
                    }, []);
            }
        }

    }
</script>