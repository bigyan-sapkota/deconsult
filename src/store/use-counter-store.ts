import { create } from "zustand";

type CountState = {
  count: number;
};

type CountActions = {
  inc: () => void;
  dec: () => void;
  res: () => void;
};

type CountStore = CountState & CountActions;

const useCounterStore = create<CountStore>((set) => ({
  count: 5,
  inc: () => set((state) => ({ count: state.count + 1 })),
  dec: () => set((state) => ({ count: state.count - 1 })),
  res: () => set({ count: 0 }),
}));

export default useCounterStore;
