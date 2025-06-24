// stores/orderStore.js
import { defineStore } from 'pinia';

export const useOrderStore = defineStore('order', {
  state: () => ({
    orderItems: [],
  }),
  actions: {
    setOrderItems(items) {
      this.orderItems = items;
    },
    clearOrderItems() {
      this.orderItems = [];
    },
  },
  persist: true, // 로컬스토리지 저장
});
