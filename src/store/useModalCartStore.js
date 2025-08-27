import { create } from "zustand";

export const useModalCartStore = create((set, get) => ({
  ModalVisible: false,

  changeVisibleModal: () =>
    set((state) => ({
      ModalVisible: !get().ModalVisible,
    })),
}));
