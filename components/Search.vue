<template>
  <div class="bg-yellow-50 w-3/5 shadow rounded-lg mx-auto my-10">
    <SearchInput @searchJokesClicked="searchJokes($event)" class="px-4 pt-6" />
    <div class="relative p-4 lg:ml-5">
      <div v-if="isLoading">
        <Spinner />
      </div>
      <div v-else>
        <div
          v-for="jokeEntry in jokesList"
          :value="jokeEntry"
          :key="jokeEntry.id"
        >
          <JokeCard class="my-5" :joke="jokeEntry.joke" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      jokesList: null,
      isLoading: false,
    };
  },
  methods: {
    async searchJokes(searchTerm) {
      this.isLoading = true;
      try {
        const baseURL = "https://icanhazdadjoke.com/";
        let URL = `${baseURL}/search?term=${searchTerm}&limit=20&page=1`;
        this.$store.commit("addToSearchHistory", searchTerm);
        const config = {
          headers: {
            Accept: "application/json",
            "User-Agent": " Dad-Jokes (https://github.com/MFredX)",
          },
        };
        let response = await this.$axios.get(URL, config);
        this.jokesList = response.data.results;
        this.isLoading = false;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style></style>
