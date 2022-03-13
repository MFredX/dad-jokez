<template>
  <div class="bg-white overflow-hidden shadow rounded-lg my-10">
    <!-- <div class="relative lg:flex lg:items-center"> -->
    <div class="px-py-5 sm:p-6">
      <div class="relative lg:ml-10">
        <svg
          class="absolute top-0 left-0 transform -translate-x-8 -translate-y-24 h-36 w-36 text-yellow-200 opacity-50"
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
        <blockquote class="relative">
          <div class="text-2xl leading-9 font-medium text-gray-900">
            <p>{{ jokes }}</p>
          </div>
          <footer class="mt-8">
            <div class="flex">
              <div class="flex-shrink-0 lg:hidden">
                <img
                  class="h-12 w-12 rounded-full"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </div>
            </div>
          </footer>
        </blockquote>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
export default {
  data: function () {
    return { jokes: "" };
  },
  methods: {
    async getJokes() {
      try {
        const baseURL = "https://icanhazdadjoke.com/";
        const config = {
          headers: {
            Accept: "application/json",
            "User-Agent": " Dad-Jokes (https://github.com/MFredX)",
          },
        };
        let response = await this.$axios.get(baseURL, config);
        this.jokes = response.data.joke;
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    setInterval(
      function () {
        this.getJokes();
      }.bind(this),
      20000 //Change this to 10s
    );
  },
};
</script>

<style></style>
