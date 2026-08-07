"use client";

import { useBookmarkStore } from '@/app/_lib/zustand/StoreProvider';

export default function BookmarkButton({ id }: { id: number }) {
  const { articles, save, remove } = useBookmarkStore((state) => state);

  const handleClick = () => {
    articles.includes(id) ? remove(id) : save(id);
  };

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer rounded-3xl ml-auto max-w-64 h-8 bg-[#ff3b2d] flex flex-col flex-1 items-center justify-center text-white"
    >
      {articles.includes(id) ? (
        <div>Remove from Bookmarks</div>
      ) : (
        <div>Add to Bookmarks</div>
      )}
    </div>
  );
}
