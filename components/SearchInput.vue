<template>
  <div>
    <label class="block text-sm font-medium text-gray-700"
      >Search Term for Joke (less than 10 chatacters)</label
    >
    <div class="mt-3 relative">
      <input
        type="text"
        v-model="searchTerm"
        class="block w-3/4 pr-10 focus:outline-none sm:text-sm rounded-md border-gray-300 mx-auto shadow-sm"
        :class="inputState"
        placeholder="E.g Cat, Dog, Food, etc."
      />
      <div
        v-if="errorState"
        class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"
      >
        <svg
          class="h-5 w-5 text-red-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
    </div>
    <p v-if="errorState" class="mt-2 text-sm text-red-600" id="email-error">
      Your search term should be less than 10 characters!
    </p>
    <button
      type="button"
      class="inline-flex items-center mt-6 px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2"
      :class="buttonDisabled"
      v-on:click="$emit('searchJokesClicked', searchTerm)"
    >
      Search
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchTerm: "",
    };
  },
  computed: {
    inputState() {
      if (this.errorState == true) {
        return "border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500";
      } else {
        return "border-yellow-300 text-yellow-900 placeholder-yellow-300 focus:ring-yellow-500 focus:border-yellow-500";
      }
    },
    buttonDisabled() {
      if (this.errorState == true) {
        return "bg-yellow-500 opacity-50 cursor-not-allowed";
      } else {
        return "focus:ring-yellow-500 bg-yellow-600 hover:bg-yellow-700";
      }
    },
    errorState() {
      if (this.searchTerm.length > 10) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style></style>
