import { create } from "zustand";

type Store = {
  theme: "light" | "dark";
  toggleTheme: () => void;
};

export const useThemeStore = create<Store>()((set) => ({
  theme: "light",
  toggleTheme: () =>
    set(({ theme }) => ({
      theme: theme === "dark" ? "light" : "dark",
    })),
}));
