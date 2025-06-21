// stores/order.js
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
});
