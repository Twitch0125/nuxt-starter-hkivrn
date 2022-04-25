import { useDialogStore } from "~~/stores/dialog";

export const useDialog = () => {
  const dialogStore = useDialogStore();

  return {
    hide: dialogStore.hide,
    show: dialogStore.show,
    isOpen: computed(() => dialogStore.isOpen),
  };
};
