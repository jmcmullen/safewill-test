<template>
  <div class="app">
    <Header :loading="state.loading" class="app__header" />
    <div class="app__container container">
      <Search class="app__search" :search="state.query" @search="onSearch" />
      <div class="app__results">
        <Result
          class="app__result"
          v-for="(result, i) in state.results"
          :data="result"
          :key="i"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { useFlickrFeed } from '../hooks/flickr-api';

export default {
  name: 'app',
  components: {
    Header: () => import('./Header'),
    Search: () => import('./Search'),
    Result: () => import('./Result'),
  },
  setup() {
    const state = useFlickrFeed();

    return {
      state,
      onSearch(query) {
        state.loading = true;
        state.query = query;
      },
    };
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables.scss';
@import '../assets/styles/media-queries.scss';

.app {
  display: flex;
  flex-direction: column;

  &__container {
    margin-top: 3rem;
  }

  &__results {
    margin-top: 3rem;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1rem;

    @include tablet {
      grid-template-columns: 1fr 1fr 1fr;
    }

    @include desktop {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }
}
</style>
