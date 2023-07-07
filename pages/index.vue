<template>
  <div class="bg-white">
    <div
      class="max-w-7xl mx-auto overflow-visible text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8"
    >
      <Welcome
        @displayFetchRandomClick="displayFetchRandom"
        @displaySearchClick="displaySearch"
        @displayHistoryClick="displayHistory"
      />
      <div v-if="isfetchRandomOn">
        <FetchRandom />
      </div>
      <div v-if="isSearchOn">
        <Search />
      </div>
      <div v-if="isHistroyOn">
        <History />
      </div>
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
      isHistroyOn: false,
    };
  },
  methods: {
    displayFetchRandom() {
      this.isSearchOn = false;
      this.isHistroyOn = false;
      this.isfetchRandomOn = true;
    },
    displaySearch() {
      this.isfetchRandomOn = false;
      this.isHistroyOn = false;
      this.isSearchOn = true;
    },
    displayHistory() {
      this.isfetchRandomOn = false;
      this.isSearchOn = false;
      this.isHistroyOn = true;
    },
  },
};
</script>
