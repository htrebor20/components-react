import { create } from "zustand";
import { GenderType } from "./types";

interface FilterStore {
  gender: GenderType;
  page: number;
  setGender: (gender: GenderType) => void;
  setPage: (page: number) => void;
}

const useFilterStore = create<FilterStore>((set) => ({
  gender: 'todos',
  page: 1,
  setGender: (gender) => set({ gender }),
  setPage: (page) => set({ page }) 
}));

export default useFilterStore;
