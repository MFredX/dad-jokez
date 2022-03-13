export const state = () => ({
  searchHistory: [],
});

export const mutations = {
  addToSearchHistory(state, newEntry) {
    this.state.searchHistory.push(newEntry);
  },
};
