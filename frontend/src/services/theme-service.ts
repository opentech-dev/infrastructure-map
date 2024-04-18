// import { getFromLocalStorage, setToLocalStorage } from "@/lib/local-storage";
import { signal, effect } from "@preact/signals-react";

const root = window.document.documentElement;

export type Theme = "dark" | "light" | "system";

// const storageKey = "inframap-theme";

// const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
//   ? "dark"
//   : "light";

// const savedTheme = (getFromLocalStorage(storageKey) as Theme) || systemTheme;

export const theme = signal<Theme>("light");

effect(() => {
  root.classList.remove("light", "dark");

  root.classList.add(theme.value);
});

export const setTheme = (value: Theme) => {
  // setToLocalStorage(storageKey, value);
  theme.value = value;
};
