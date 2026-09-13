import { createStore } from 'zustand/vanilla';

import { getFromLocalStorage, saveToLocalStorage } from '../_utils/local-sorage';

export type BookmarkState = {
  articles: Array<number>;
};

export type BookmarkActions = {
  save: (id: number) => void;
  remove: (id: number) => void;
};

export type BookmarkStore = BookmarkState & BookmarkActions;

const storedItems = getFromLocalStorage("bookmarkedArticles");

export const defaultInitState: BookmarkState = {
  articles: storedItems ? JSON.parse(storedItems) : "",
};

export const createBookmarkStore = (
  initState: BookmarkState = defaultInitState,
) => {
  return createStore<BookmarkStore>()((set) => ({
    ...initState,
    save: (id) =>
      set((state) => {
        const item = { articles: [...state.articles, id] };
        saveToLocalStorage("bookmarkedArticles", item.articles);
        return item;
      }),
    remove: (id) =>
      set((state) => {
        const item = { articles: state.articles.filter((item) => item !== id) };
        saveToLocalStorage("bookmarkedArticles", item.articles);
        return item;
      }),
  }));
};
