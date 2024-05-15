import { create } from "zustand";

type Store = {
  count: number;
  inc: () => void;
  dec: () => void;
};

export const counterStore = create<Store>()((set) => ({
  count: 1,
  inc: () => set(({ count }) => ({ count: count + 1 })),
  dec: () => set(({ count }) => ({ count: count - 1 })),
}));
