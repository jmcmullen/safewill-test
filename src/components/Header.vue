<template>
  <header class="header">
    <vs-progress v-if="loading" indeterminate color="primary" />
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: ['loading'],
};
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables.scss';

.header {
  width: 100%;
  height: 5px;
  background: $color-true-white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  z-index: 300;
}
</style>
