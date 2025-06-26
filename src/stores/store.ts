import { create } from "zustand";
import { GenderType } from "./types";


interface FilterStore {
  gender: GenderType;
  setGender: (gender: GenderType) => void;
}

const useFilterStore = create<FilterStore>((set) => ({
  gender: 'female',
  setGender: (gender) => set({ gender }),
}));

export default useFilterStore;
