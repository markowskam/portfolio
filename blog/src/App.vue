<template>
  <div id="app">
    <app-header></app-header>
    <main class="container container--small">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
  import Header from './components/Header.vue'

  export default {
    components: {
      'app-header': Header,
    }
  }

</script>

<style scoped src="@/assets/css/main.css">
</style>