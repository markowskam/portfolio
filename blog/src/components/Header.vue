<template>
    <header class="c-header container container--fluid border border-primary">
        <div class="c-header__logo">
            <router-link to="/" exact><img src="../assets/img/logo.jpg" alt=""></router-link>
        </div>
        <nav class="c-header__menu c-menu">
            <ul>
                <li><router-link to="/posts/lifestyle" class="c-menu__item" exact>Lifestyle</router-link></li>
                <li><router-link to="/posts/fashion" class="c-menu__item" exact>Fashion</router-link></li>
                <li><router-link to="/posts/culture" class="c-menu__item" exact>Culture</router-link></li>
                <li><router-link to="/posts/architecture" class="c-menu__item" exact>Architecture</router-link></li>
            </ul> 
        </nav>
        <div class="c-header__img">
            <!-- <img src="../assets/img/front.jpg" alt=""> -->
        </div>
    </header>
</template>

<script>
export default {
    
}
</script>

<style scoped src="@/assets/css/style.css">
</style>