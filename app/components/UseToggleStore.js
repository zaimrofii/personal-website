import { create } from "zustand";

const useToggleStore = create((set) => ({
  isOpen: false,
  toggleSideBar: () => set((state) => ({ isOpen: !state.isOpen })),
  openSideBar: () => set({ isOpen: true }),
  closeSideBar: () => set({ isOpen: false }),
}));

export default useToggleStore;
