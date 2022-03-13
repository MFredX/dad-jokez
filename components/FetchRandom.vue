<template>
  <div class="bg-white w-3/5 overflow-hidden shadow rounded-lg mx-auto my-10">
    <div class="my-4 bg">
      <p class="text-l tracking-tight text-gray-900">
        A joke will be shown every 10 seconds, go easy on the laughs 😃
      </p>
    </div>
    <div class="relative p-4 lg:ml-5">
      <div v-if="isLoading">
        <Spinner />
      </div>
      <div v-else>
        <JokeCard :joke="joke" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return { joke: "", isLoading: false };
  },
  methods: {
    async getJokes() {
      this.isLoading = true;
      try {
        const baseURL = "https://icanhazdadjoke.com/";
        const config = {
          headers: {
            Accept: "application/json",
            "User-Agent": " Dad-Jokes (https://github.com/MFredX)",
          },
        };
        let response = await this.$axios.get(baseURL, config);
        this.joke = response.data.joke;
        this.isLoading = false;
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.getJokes();
    setInterval(
      function () {
        this.getJokes();
      }.bind(this),
      10000
    );
  },
};
</script>

<style></style>
