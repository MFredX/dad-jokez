<template>
  <div class="bg-white w-3/5 shadow rounded-lg mx-auto my-10">
    <p class="text-l py-4 tracking-tight text-gray-900 border-b-2">
      These are the most recent searches😃
    </p>
    <ul v-if="history.length > 0" class="divide-y divide-gray-200">
      <li
        v-for="(entry, index) in history.slice(0, 5)"
        :key="index"
        class="py-4"
      >
        <div class="ml-3">
          <p class="text-sm font-medium text-gray-900">{{ entry }}</p>
        </div>
      </li>
    </ul>
    <ul v-else>
      <li class="py-4">
        <div class="ml-3">
          <p class="text-sm font-medium text-gray-900">
            No history to be dsiplayed!
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      history: [],
    };
  },
  created() {
    this.history = this.$store.state.searchHistory;
  },
};
</script>

<style></style>
