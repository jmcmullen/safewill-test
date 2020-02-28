import { reactive, watch } from '@vue/composition-api';

export const useFlickrFeed = () => {
  const state = reactive({
    query: '',
    loading: true,
    results: [],
    error: '',
  });

  watch(async () => {
    /**
     * Flickr's API doesn't support CORS.
     * Proxy via https://cors-anywhere.herokuapp.com/
     */

    const tags = state.query.split(' ').join(',');
    const flickrApiUrl = `https://cors-anywhere.herokuapp.com/https://www.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1&tags=${tags}&tagmode=any`;

    try {
      const response = await fetch(flickrApiUrl);
      const json = await response.json();
      state.results = json.items;
      state.loading = false;
    } catch (error) {
      state.error = error.message;
    }
  });

  return state;
};
