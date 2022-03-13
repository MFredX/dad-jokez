<template>
  <div class="bg-white w-3/5 overflow-hidden shadow rounded-lg mx-auto my-10">
    <div class="relative p-9 lg:ml-5">
      <div v-if="isLoading">
        <Spinner />
      </div>
      <div v-else>
        <svg
          class="h-36 w-36 text-yellow-200 opacity-50"
          stroke="currentColor"
          fill="none"
          viewBox="0 0 144 144"
          aria-hidden="true"
        >
          <path
            stroke-width="2"
            d="M41.485 15C17.753 31.753 1 59.208 1 89.455c0 24.664 14.891 39.09 32.109 39.09 16.287 0 28.386-13.03 28.386-28.387 0-15.356-10.703-26.524-24.663-26.524-2.792 0-6.515.465-7.446.93 2.327-15.821 17.218-34.435 32.11-43.742L41.485 15zm80.04 0c-23.268 16.753-40.02 44.208-40.02 74.455 0 24.664 14.891 39.09 32.109 39.09 15.822 0 28.386-13.03 28.386-28.387 0-15.356-11.168-26.524-25.129-26.524-2.792 0-6.049.465-6.98.93 2.327-15.821 16.753-34.435 31.644-43.742L121.525 15z"
          />
        </svg>
        <blockquote class="absolute right-8 top-8">
          <div class="text-2xl leading-9 font-medium text-gray-900">
            <p>{{ joke }}</p>
          </div>
        </blockquote>
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
      10000 //Change this to 10s
    );
  },
};
</script>

<style></style>
