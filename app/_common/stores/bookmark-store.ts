import { createStore } from 'zustand/vanilla';

export type BookmarkState = {
  articles: Array<number>;
};

export type BookmarkActions = {
  save: (id: number) => void;
  remove: (id: number) => void;
};

export type BookmarkStore = BookmarkState & BookmarkActions;

let storedItems = null;

if (typeof window !== "undefined") {
  storedItems = window?.localStorage.getItem("bookmarkedArticles");
  console.log("storedItems", storedItems);
}

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
        window?.localStorage.setItem(
          "bookmarkedArticles",
          JSON.stringify(item.articles),
        );
        return item;
      }),
    remove: (id) =>
      set((state) => {
        const item = { articles: state.articles.filter((item) => item !== id) };
        window?.localStorage.setItem(
          "bookmarkedArticles",
          JSON.stringify(item.articles),
        );
        return item;
      }),
  }));
};
