<template>
  <div>
    <h2
      class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"
    >
      <span class="block"
        >Welcome to the
        <span class="text-yellow-500">Dad Jokez App 🤣</span></span
      >
      <span class="block">Select an option to begin</span>
    </h2>
    <div class="mt-8 flex justify-center">
      <button
        type="button"
        class="items-center ml-3 px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
        v-on:click="$emit('displayFetchRandomClick')"
      >
        Fetch Random Jokes 🔄
      </button>
      <button
        type="button"
        class="items-center ml-3 px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
        v-on:click="$emit('displaySearchClick')"
      >
        Search Jokes 🔎
      </button>
      <button
        type="button"
        class="items-center ml-3 px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
        v-on:click="$emit('displayHistoryClick')"
      >
        History 🕒
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {};
  },
};
</script>

<style></style>
