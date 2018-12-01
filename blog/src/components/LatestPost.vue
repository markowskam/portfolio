<template>
  <article class="c-latest-post">
    <div class="o-container">
      <img class="c-latest-post__img" src="../assets/img/front.jpg" alt="">
    </div>
    <div class="o-container o-container--fluid">
      <div class="c-latest-post__content">
        <a href="" class="c-latest-post__category">
          Lifestyle
        </a>
        <router-link to="'/post/:id">
          <h2 class="c-latest-post__title">
            The perfect weekend getaway
          </h2>
          <p class="c-latest-post__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis culpa expedita mollitia dolorum perspiciatis dignissimos
            accusantium illum? Aut assumenda odio qui nobis ipsum laboriosam, labore vero! Minima ipsum consequuntur amet.Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Perferendis culpa expedita mollitia dolorum perspiciatis dignissimos
            accusantium illum? Aut assumenda odio qui nobis ipsum laboriosam, labore vero! Minima ipsum consequuntur amet.Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Perferendis culpa expedita mollitia dolorum perspiciatis dignissimos
            accusantium illum? Aut assumenda odio qui nobis ipsum laboriosam, labore vero! Minima ipsum consequuntur amet.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis culpa expedita mollitia dolorum perspiciatis
            dignissimos accusantium illum? Aut assumenda odio qui nobis ipsum laboriosam, labore vero! Minima ipsum consequuntur
            amet.Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis culpa expedita mollitia dolorum perspiciatis
            dignissimos accusantium illum? Aut assumenda odio qui nobis ipsum laboriosam, labore vero! Minima ipsum consequuntur
            amet.Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis culpa expedita mollitia dolorum perspiciatis
            dignissimos
          </p>
        </router-link>
      </div>
    </div>
  </article>
</template>

<script>
  export default {
    props: {
      category: String
    }
  }
</script>