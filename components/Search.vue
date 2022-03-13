<template>
  <div class="bg-white w-3/5 shadow rounded-lg mx-auto my-10">
    <SearchInput @searchJokesClicked="searchJokes($event)" class="px-4 py-6" />
    <div>
      <div v-if="isLoading">
        <Spinner />
      </div>
      <div v-else>
        <div v-for="joke in jokes" :value="joke" :key="joke.id">
          {{ joke.joke }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      jokes: null,
      isLoading: false,
    };
  },
  methods: {
    async searchJokes(searchTerm) {
      this.isLoading = true;
      try {
        const baseURL = "https://icanhazdadjoke.com/";
        let URL = `${baseURL}/search?term=${searchTerm}&limit=20&page=1`;
        console.log(URL);
        const config = {
          headers: {
            Accept: "application/json",
            "User-Agent": " Dad-Jokes (https://github.com/MFredX)",
          },
        };
        let response = await this.$axios.get(URL, config);
        this.jokes = response.data.results;
        this.isLoading = false;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style></style>
