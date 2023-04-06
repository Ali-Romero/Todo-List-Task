<template>
  <form class="todo-list-form" @submit.prevent="submit">
    <div class="todo-list-form__input">
      <ui-input
        v-model="fields.title"
        placeholder="Еnter text..."
      />
    </div>

    <div class="todo-list-form__textarea">
      <ui-input
        v-model="fields.description"
        textarea
        placeholder="Enter the title..."
      />
    </div>

    <div class="todo-list-form__control">
      <ui-button label="Cancel" secondary @click="cancel" />
      <ui-button
        type="submit"
        :disabled="disabled"
        :class="classes"
        label="Create"
      />
    </div>
  </form>
</template>

<script>
import UiInput from '../ui/Input.vue'
import UiButton from '../ui/Button.vue'

export default {
  components: {
    UiInput,
    UiButton,
  },
  data() {
    return {
      fields: {
        title: '',
        description: '',
      },
    }
  },
  methods: {
    submit() {
      const item = {
        ...this.fields,
        id: Date.now(),
        checked: false,
      }

      this.$emit('create', item)
    },
    cancel() {
      this.$emit('cancel')
    },
  },
  computed: {
    disabled() {
      return !this.fields.title
    },
    classes() {
      return {
        'button--disabled': !this.fields.title,
      }
    },
  },
}
</script>

<style lang="sass" scoped>
.todo-list-form
  &__input
    width: 100%
    height: 40px
    margin: 0 0 20px 0

  &__textarea
    width: 100%
    height: 100px
    margin: 0 0 20px

  &__control
    display: flex
    justify-content: space-between
</style>
