<template>
  <v-container class="grey lighten-5">
    <v-row no-gutters class="mt-4">
      <v-col class="d-flex justify-center">
        <v-skeleton-loader
          v-if="overlay"
          class="mx-auto"
          max-width="300"
          width="300"
          type="card"
        ></v-skeleton-loader>
        <v-hover v-else>
          <template v-slot:default="{ hover }">
            <ComicImage
              transition="fab-transition"
              :elevation="hover ? 24 : 6"
              :title="comic.title"
              :image="comic.img"
              :alt="comic.alt"
            />
          </template>
        </v-hover>
      </v-col>
    </v-row>
    <v-row no-gutters class="mt-4">
      <v-col class="d-flex justify-center">
        <v-rating
          v-model="rating"
          background-color="primary"
          color="primary"
          size="64"
        ></v-rating>
      </v-col>
    </v-row>
    <v-overlay :value="overlay">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
  </v-container>
</template>

<script>
import HelloWorld from "../components/HelloWorld";
import ComicImage from "@/components/ComicImage";
import axios from "axios";

export default {
  name: "Home",

  components: {
    HelloWorld,
    ComicImage,
  },
  data() {
    return {
      rating: null,
      comic: {
        title: "",
        img: "",
        alt: "",
      },
      overlay: false,
    };
  },
  async created() {
    this.overlay = true;
    const axiosInstance = axios.create({
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, PUT, POST, DELETE, OPTIONS",
      },
    });
    let comicRamdom = Math.floor(Math.random() * 100);
    let response = await axiosInstance.get(
      `https://localhost:8082/api/comic?num=${comicRamdom}`
    );
    this.comic = await response.data;
    this.overlay = false;
  },
};
</script>
