<template>
  <button
    v-bind="$attrs"
    class="button"
    :type="type"
    :class="classes"
    v-on="$listeners"
  >
    {{ label }}
  </button>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'button',
    },
    secondary: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      return {
        'button--secondary': this.secondary,
      }
    },
  },
}
</script>

<style lang="sass" scoped>
@import "src/assets/styles/variables"

.button
  padding: 5px 10px
  background: $color-primary
  border-radius: 7px
  font-size: 14px
  line-height: 17px
  text-transform: uppercase
  cursor: pointer
  color: $color-white
  transition: all 0.3s
  font-family: "Montserrat-Medium"
  &:hover
    background: $color-orange-2

  &--secondary
    background: $color-grey-4
    color: $color-grey-3
    &:hover
      background: $color-grey-1

  &--disabled
    background: $color-grey-5
    color: $color-grey-2
    &:hover
      background: $color-grey-5
      color: $color-grey-2
      cursor: no-drop
</style>
