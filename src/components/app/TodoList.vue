<template>
  <div class="todo-list">
    <div class="todo-list__wrapper">
      <div class="todo-list__head">
        <h1 class="todo-list__title">
          Todo list
        </h1>
        <transition name="fade">
          <div v-if="!creation" class="todo-list__button">
            <ui-button label="Add" @click="creation = true" />
          </div>
        </transition>
      </div>

      <transition name="fade" mode="out-in">
        <div v-if="creation" key="form" class="todo-list__form">
          <app-todo-list-form @create="add" @cancel="creation = false" />
        </div>
        <ul v-else-if="items.length" key="list" class="todo-list__content">
          <li v-for="item in items" :key="item.id" class="todo-list__item">
            <app-todo-list-item
              :title="item.title"
              :description="item.description"
              :checked.sync="item.checked"
            />
          </li>
        </ul>
        <div v-else key="empty" class="todo-list__info">
          Empty list
        </div>
      </transition>

      <div class="todo-list__shadow"></div>
    </div>
  </div>
</template>

<script>
import UiButton from '../ui/Button.vue'
import AppTodoListItem from '../app/TodoListItem.vue'
import AppTodoListForm from '../app/TodoListForm.vue'

export default {
  components: {
    UiButton,
    AppTodoListItem,
    AppTodoListForm,
  },
  data() {
    return {
      creation: false,
      items: [],
    }
  },
  methods: {
    add(item) {
      this.items = [...this.items, item]
      this.creation = false
    },
  },
}
</script>

<style lang="sass" scoped>
@import "src/assets/styles/variables"
@import "src/assets/styles/mixins"

.todo-list
  position: relative
  z-index: 4
  margin: 0 auto
  max-width: 397px
  width: 100%
  height: 420px
  @include above('xxs')
    height: 540px
  @include above('xs')
    max-width: 420px

  &:before
    content: ""
    position: absolute
    top: 0
    left: 0
    width: calc(100% - 30px)
    max-width: 310px
    height: 68px
    transform: rotate(0deg)
    border-radius: 20px
    background: linear-gradient(180deg, #31394D 0%, #091739 100%)
    z-index: -1
    animation: card-1 3s infinite ease-out
    @include above('xxs')
      width: 100%
      max-width: 328px
    @include above('xs')
      max-width: 395px

    @keyframes card-1
      0%
        transform: rotate(0deg)
        top: 0
      80%
        transform: rotate(-2.32deg)
        top: -17px
      100%
        transform: rotate(0deg)
        top: 0

  &:after
    content: ""
    position: absolute
    top: 0
    left: 0
    max-width: 260px
    width: calc(100% - 60px)
    height: 85px
    background: linear-gradient(180deg, #4F5565 0%, #000000 53.65%)
    border-radius: 20px
    transform: rotate(0deg)
    z-index: -2
    animation: card-2 3s infinite ease-out
    @include above('xxs')
      width: 100%
      max-width: 284px
    @include above('xs')
      max-width: 341px

    @keyframes card-2
      20%
        transform: rotate(0deg)
        top: 0
      70%
        transform: rotate(-4.48deg)
        top: -27px
      100%
        transform: rotate(0deg)
        top: 0

  &__wrapper
    background: $color-blue-1
    box-shadow: 0px 14px 34px rgba(0, 0, 0, 0.25)
    border-radius: 20px 0px 40px
    width: 100%
    height: 100%
    padding: 30px 21px 30px 30px
    scrollbar-color: $color-primary #45824500
    color: $color-white
    ::-webkit-scrollbar
      width: 4px
    ::-webkit-scrollbar-thumb
      border-radius: 10px
      box-shadow: inset 0px 0px 100px $color-primary

  &__head
    margin: 0 0 29px 0
    display: flex
    align-items: center
    justify-content: space-between
    padding: 0 10px 0 0

  &__title
    font-size: 24px
    line-height: 30px
    font-family: $bold-font-family
    @include above('xxs')
      font-size: 28px
      line-height: 34px

  &__form
    padding: 0 10px 0 0

  &__content
    height: 300px
    overflow-y: scroll
    overflow-x: hidden
    width: 100%
    scrollbar-width: thin
    padding: 0 10px 0 0
    @include above('xxs')
      height: 414px

  &__info
    color: $color-grey-2

  &__shadow
    position: absolute
    bottom: 0
    left: 25px
    right: 34px
    height: 75px
    background: linear-gradient(180deg, rgba(37, 46, 66, 0) 0%, #252E42 67.19%)
    pointer-events: none
</style>
