// src/providers/counter-store-provider.tsx
"use client";

import { createContext, ReactNode, useContext, useState } from 'react';
import { useStore } from 'zustand';

import { BookmarkStore, createBookmarkStore } from '@/app/_common/stores/bookmark-store';

export type BookmarkStoreApi = ReturnType<typeof createBookmarkStore>;

export const BookmarkStoreContext = createContext<BookmarkStoreApi | undefined>(
  undefined,
);

export interface BookmarkStoreProviderProps {
  children: ReactNode;
}

export const BookmarkStoreProvider = ({
  children,
}: BookmarkStoreProviderProps) => {
  const [store] = useState(() => createBookmarkStore());

  return (
    <BookmarkStoreContext.Provider value={store}>
      {children}
    </BookmarkStoreContext.Provider>
  );
};

export const useBookmarkStore = <T,>(
  selector: (store: BookmarkStore) => T,
): T => {
  const bookmarkStoreContext = useContext(BookmarkStoreContext);
  if (!bookmarkStoreContext) {
    throw new Error(
      `useBookmarkStore must be used within BookmarkStoreProvider`,
    );
  }

  return useStore(bookmarkStoreContext, selector);
};
