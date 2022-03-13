<template>
  <div
    class="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8 bg-yellow-50"
  >
    <Welcome
      @displayFetchRandomClick="displayFetchRandom"
      @displaySearchClick="displaySearch"
    />
    <div v-if="isfetchRandomOn">
      <FetchRandom />
    </div>
    <div v-if="isSearchOn">
      <Search />
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  data: function () {
    return {
      isfetchRandomOn: false,
      isSearchOn: false,
    };
  },
  methods: {
    displayFetchRandom() {
      this.isSearchOn = false;
      this.isfetchRandomOn = true;
    },
    displaySearch() {
      this.isfetchRandomOn = false;
      this.isSearchOn = true;
    },
  },
};
</script>
