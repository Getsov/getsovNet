<template>
  <div class="mt-4">
    <section>
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-bold">Articles</h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
          <ArticleCard
            v-for="article in articles"
            :key="article.content.title"
            :title="article.content.title"
            :description="article.content.description"
            :author="article.content.author"
            :date="article.content.date.toLocaleDateString()"
            :slug="`/${article.slug}`"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ArticleCard from "../components/ui/ArticleCard.vue";

export default {
  components: {
    ArticleCard
  },
  async asyncData({ app }) {
    const res = await app.$storyapi.get("cdn/stories", {
      starts_with: "articles/",
      resolve_relations: "author"
    });

    // Converting content.date from a String to a Date
    const articles = res.data.stories.map(story => {
      story.content.date = new Date(story.content.date);
      return story;
    });
    console.log(articles[0].content.author);
    return { articles };
  }
};
</script>
