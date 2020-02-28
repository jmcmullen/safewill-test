<template>
  <vs-card class="result" v-if="data">
    <div slot="media">
      <div class="result__image-wrapper">
        <img class="result__image" :src="data.media.m" alt />
      </div>
    </div>
    <div class="result__details">
      <p><strong>Author:</strong> {{ authorName }}</p>
      <p><strong>Published:</strong> {{ publishDate }}</p>
      <div class="result__tags" v-if="data.tags">
        <vs-chip class="result__tags" v-for="tag in tags" :key="tag">{{
          tag
        }}</vs-chip>
      </div>
    </div>
    <div slot="footer">
      <vs-row vs-justify="flex-end">
        <vs-button @click="openLink" color="primary" icon="open_in_new"
          >Open Image</vs-button
        >
      </vs-row>
    </div>
  </vs-card>
</template>

<script>
import formatDistance from 'date-fns/formatDistance';
import { computed } from '@vue/composition-api';

export default {
  name: 'Result',
  props: ['data'],
  setup(props) {
    const regex = /"(.*?)"/;
    const authorName = computed(() => regex.exec(props.data.author)[1]);
    const publishDate = computed(() =>
      formatDistance(new Date(props.data.published), new Date(), {
        addSuffix: true,
      })
    );
    const tags = computed(() => props.data.tags.split(' ').slice(0, 5));

    const openLink = () => {
      window.open(props.data.link, '_blank');
    };

    return { authorName, publishDate, tags, openLink };
  },
};
</script>

<style lang="scss">
.result {
  &__image {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    object-fit: cover;
    object-position: 50% 0;
    font-family: 'object-fit: cover';

    &-wrapper {
      padding-top: 62.5%;
      position: relative;
      display: block;
      overflow: hidden;
      margin: 0;
      width: 100%;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
    }
  }

  &__details {
    height: 125px;
    overflow: hidden;
  }

  &__tags {
    margin-top: 5px;
  }

  .vs-card {
    &--content {
      margin: 0;
    }
  }
}
</style>
