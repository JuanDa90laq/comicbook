<template>
  <div>
    <h1 class="text-center font-weight-bold">{{ title }}</h1>
    <v-img :src="image" :alt="alt"> </v-img>
  </div>
</template>

<script>
export default {
  name: "ComicImage",
  props: {
    title: {
      type: String,
      default: "",
    },
    image: {
      type: String,
      default: "",
    },
    alt: {
      type: String,
      default: "",
    },
  },
};
</script>
