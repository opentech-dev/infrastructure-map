import { getFromLocalStorage, setToLocalStorage } from "@/lib/local-storage";
import { signal } from "@preact/signals-react";

const storageKey = "inframap-language";

const savedLanguage = (getFromLocalStorage(storageKey) as string) || "en";

export const language = signal<string>(savedLanguage);

export const setLanguage = (value: string) => {
  setToLocalStorage(storageKey, value);
  language.value = value;
};
