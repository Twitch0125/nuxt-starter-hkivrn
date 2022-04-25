import { defineStore } from "pinia";

export const useDialogStore = defineStore("dialogStore", {
  state: () => ({
    isOpen: false,
    resolve: null,
  }),
  actions: {
    show() {
      this.isOpen = true;
      return new Promise((resolve) => {
        this.resolve = resolve;
      });
    },
    hide(val: any) {
      this.resolve(val);
      this.isOpen = false;
    },
  },
});
