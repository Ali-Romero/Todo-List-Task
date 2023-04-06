<template>
  <main class="main">
    <app-page />
  </main>
</template>

<script>
import AppPage from './components/app/Page.vue'

export default {
  components: {
    AppPage,
  },
}
</script>

<style lang="sass" scoped>
.main
  height: 100%
</style>
