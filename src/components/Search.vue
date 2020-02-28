<template>
  <form class="search">
    <vs-input
      ref="searchInput"
      :value="searchQuery"
      @keyup="onChange"
      icon-no-border
      icon-after
      icon="search"
    />
  </form>
</template>

<script>
import { ref, onMounted } from '@vue/composition-api';
import { debounce } from 'throttle-debounce';

export default {
  name: 'Search',
  props: ['search'],
  setup({ search }, { emit }) {
    const searchInput = ref(null);
    const searchQuery = ref(search);
    const onChange = debounce(300, event => {
      searchQuery.value = event.target.value;
      emit('search', searchQuery.value);
    });

    onMounted(() => {
      searchInput.value.$el.querySelector('input').focus();
    });

    return {
      searchInput,
      searchQuery,
      onChange,
    };
  },
};
</script>

<style lang="scss">
.search {
  .vs-input {
    width: 100%;

    &--input {
      padding: 1rem 2rem;
      font-size: 1.4rem;
    }
  }

  .vs-icon {
    font-size: 2rem;
    margin: 0.5rem;
  }
}
</style>
