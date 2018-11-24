<template>
    <header class="c-header o-container o-container--fluid">
        <div class="o-grid-row">
            <div class="o-grid-row__item">
                <router-link to="/" exact>
                    <img class="c-header__logo" src="../assets/img/logo.jpg" alt="">
                </router-link>
            </div>
            <nav class="o-grid-row__item">
                <ul class="c-header__menu o-flex o-flex--right">
                    <li>
                        <router-link to="/posts/lifestyle" class="c-header__item" exact>Lifestyle</router-link>
                    </li>
                    <li>
                        <router-link to="/posts/fashion" class="c-header__item" exact>Fashion</router-link>
                    </li>
                    <!-- <li>
                        <router-link to="/posts/culture" class="c-header__item" exact>Culture</router-link>
                    </li> -->
                    <li>
                        <router-link to="/posts/architecture" class="c-header__item" exact>Architecture</router-link>
                    </li>
                </ul>
            </nav>

        </div>

    </header>
</template>

<script>
    export default {

    }
</script>