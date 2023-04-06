<template>
  <label class="ui-input">
    <span class="ui-input__label">{{ label }}</span>
    <textarea
      v-if="textarea"
      v-model="model"
      v-bind="$attrs"
      class="ui-input__control"
      rows="4"
      v-on="listeners"
    />
    <input
      v-else
      v-model="model"
      v-bind="$attrs"
      type="text"
      class="ui-input__control"
      v-on="listeners"
    />
  </label>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    value: {
      type: String,
      required: true,
    },
    textarea: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: '',
    },
  },
  computed: {
    listeners() {
      const { input, ...listeners } = this.$listeners

      return listeners
    },
    model: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      },
    },
  },
}
</script>

<style lang="sass" scoped>
@import "src/assets/styles/variables"

.ui-input
  &__control
    border-radius: 7px
    background: none
    border: 1px solid $color-grey-1
    padding: 0
    outline: none
    resize: none
    overflow: auto
    width: 100%
    height: 100%
    padding: 10px
    -moz-appearance: none
    color: $color-white
    font-family: $base-font-family
    &::placeholder
      color: $color-grey-2
      font-style: italic
      font-weight: 600
      font-family: $base-font-family
    &:-ms-input-placeholder
      color: $color-grey-2
      font-style: italic
      font-weight: 600
      font-family: $base-font-family
    &::-ms-input-placeholder
      color: $color-grey-2
      font-style: italic
      font-weight: 600
      font-family: $base-font-family
</style>
