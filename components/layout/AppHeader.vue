<template>
  <header class="w-full bg-main py-2">
    <div class="container mx-auto px-4">
      <div class="flex">
        <nuxt-link class="text-2xl text-white font-semibold" to="/"
          >Getsov</nuxt-link
        >
        <SearchBox :search="fetchSuggestions" class="flex-1 max-w-sm ml-12" />
      </div>
    </div>
  </header>
</template>
<script>
import SearchBox from "../ui/SearchBox.vue";

export default {
  components: {
    SearchBox
  },
  methods: {
    async fetchSuggestions(searchInput) {
      const { data } = await this.$storyapi.get("cdn/stories", {
        starts_with: "articles/",
        resolve_relations: "author",
        search_term: searchInput,
        per_page: 5
      });

      return data.stories;
    }
  }
};
</script>
