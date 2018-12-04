<template>
  <div id="app">
    <div class="o-container">
      <app-header></app-header>
    </div>
    <main>
      <router-view></router-view>
    </main>
    <footer>
      <div class="c-footer">
        <div class="o-container o-container--fluid">
          <div class="c-footer__content o-flex">
            <div class="c-footer__documents">
              <a class="c-footer__conditions" href="#">Terms and conditions</a>
              <a class="c-footer__privacy" href="#">Privacy</a>
            </div>
            <div class="c-footer__social-media o-flex">
              <div class="c-footer__text">Follow</div>
              <div class="c-social-icons o-flex">
                <a href="#" class="c-social-icons__icon">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#" class="c-social-icons__icon">
                  <i class="fab fa-instagram"></i>
                </a>
                <a href="#" class="c-social-icons__icon">
                  <i class="fab fa-pinterest-p"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
  import Header from './components/Header.vue'

  export default {
    components: {
      'app-header': Header,
    },
    mounted() {
      this.$store.dispatch('fetchAllPosts');
    }
  }
</script>

<style src="@/assets/css/main.css">
</style>