<template>
  <div id="app">
    <div class="o-container">
      <app-header></app-header>
    </div>
    <main>
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

<style src="@/assets/css/main.css">
</style>