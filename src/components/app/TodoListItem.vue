<template>
  <div class="todo-list-item">
    <ui-checkbox v-model="model" :title="title" :description="description" />
  </div>
</template>

<script>
import UiCheckbox from '../ui/Checkbox.vue'

export default {
  components: {
    UiCheckbox,
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    checked: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    model: {
      get() {
        return this.checked
      },
      set(value) {
        this.$emit('update:checked', value)
      },
    },
  },
}
</script>

<style lang="sass" scoped>
.todo-list-item
  position: relative

  &::before
    content: ""
    position: absolute
    height: 34px
    width: 12px
    right: 0
    bottom: 0
    background: linear-gradient(180deg, #252E42 9.38%, rgba(37, 46, 66, 0) 66.15%)
    transform: rotate(90deg)
    z-index: 1
</style>
