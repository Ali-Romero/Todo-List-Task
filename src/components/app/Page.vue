<template>
  <div class="page">
    <div class="page__wrapper">
      <div class="page__todo-list">
        <app-todo-list />
      </div>
      <div class="page__description-info">
        © {{ new Date().getFullYear() }}. Miyzamov Sherali
      </div>
    </div>
  </div>
</template>

<script>
import AppTodoList from '../app/TodoList.vue'

export default {
  components: {
    AppTodoList,
  },
}
</script>

<style lang="sass" scoped>
@import "src/assets/styles/variables"

.page
  display: flex
  align-items: center
  justify-content: center
  min-height: 100%
  background: radial-gradient(50% 50% at 50% 50%, #252E42 0%, #161C2E 100%)

  &__wrapper
    width: 100%
    display: flex
    justify-content: center
    flex-direction: column
    padding: 162px 15px

  &__todo-list
    margin: 0 0 31px 0

  &__description-info
    color: #414B62
    font-family: $medium-font-family
    text-align: center
</style>
