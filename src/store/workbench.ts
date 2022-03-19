import { defineStore } from 'pinia';

export const useMainStore = defineStore({
  id: 'workbench',
  state: () => ({
    timestamp: Date.now(),
  }),
  getters: {
    timestampFormat: (state) => `Now: ${state.timestamp}`,
  },
  actions: {
    setTimestamp() {
      this.timestamp = Date.now();
    },
  },
});
