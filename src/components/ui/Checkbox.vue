<template>
  <label class="ui-checkbox">
    <input
      v-bind="$attrs"
      v-model="model"
      :value="value"
      type="checkbox"
      class="ui-checkbox__control"
      v-on="listeners"
    />
    <span class="ui-checkbox__box">
      <span class="ui-checkbox__icon">
        <icon-checked />
      </span>
    </span>
    <span class="ui-checkbox__label">
      <span class="ui-checkbox__title">{{ title }}</span>
      <span v-if="description" class="ui-checkbox__description">
        {{ description }}
      </span>
    </span>
  </label>
</template>

<script>
import IconChecked from '../icons/Checked.vue'

export default {
  components: {
    IconChecked,
  },
  model: {
    prop: 'inputValue',
    event: 'input',
  },
  inheritAttrs: false,
  props: {
    inputValue: {
      type: [Array, Boolean],
      required: true,
    },
    value: {
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    description: {
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
        return this.inputValue
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
@import "src/assets/styles/mixins"

.ui-checkbox
  $parent: &

  display: flex
  padding: 9px 0
  cursor: pointer
  transition: 0.2s
  &:hover
    color: $color-primary
    #{$parent}__box
      background: $color-orange-3

  &__control
    display: block
    width: 0
    height: 0
    opacity: 0
    overflow: hidden
    padding: 0
    margin: 0
    visibility: hidden
    &:checked + #{$parent}__box
      background: $color-primary
      transition: background 0.1s
    &:checked + #{$parent}__box #{$parent}__icon
      width: 12px
    &:checked + #{$parent}__box + #{$parent}__label #{$parent}__title
      text-decoration: line-through
      color: $color-grey-1
    &:checked + #{$parent}__box + #{$parent}__label #{$parent}__description
      white-space: unset

  &__box
    min-width: 20px
    height: 20px
    padding: 5px 0 1px 4px
    margin: 0 15px 0 0
    border-radius: 6px
    background: $color-grey-1
    transition: background 0.1s

  &__icon
    width: 0
    height: 10px
    transition: width 0.2s
    transition-delay: 0.1s
    will-change: width
    overflow: hidden
    display: block
    svg
      display: block

  &__label
    min-width: 0
    display: block

  &__description
    font-size: 12px
    line-height: 15px
    color: $color-grey-1
    display: block
    white-space: nowrap
    position: relative
</style>
