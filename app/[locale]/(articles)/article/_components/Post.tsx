"use client";

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import { TSuggestedItemData } from '@/app/_common/types/dataTypes';
import { fetchArticles } from '@/app/_lib/react-query/utils';
import { useQuery } from '@tanstack/react-query';

import BookmarkButton from './BookmarkButton';

export default function PostGrid() {
  const params = useParams();
  const locale = params.locale as string;
  const slug = params.slug as string;

  const [postData, setPostData] = useState<TSuggestedItemData>();

  const { data, isPending, isError, error } = useQuery<
    Array<TSuggestedItemData>
  >({
    queryKey: ["article"],
    queryFn: () => fetchArticles(),
  });

  useEffect(() => {
    if (data) {
      const res = data.find((item) => item.slug === slug);
      setPostData(res);
    }
  }, [data]);

  if (isPending) {
    return <div className="text-[#1D1B20] font-bold text-2xl">Pending...</div>;
  }

  if (isError) {
    return (
      <div className="text-red-600 font-bold text-2xl">
        Error: {error?.message}
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col flex-1 items-center justify-start bg-zinc-50 font-sans dark:bg-black">
      {postData ? (
        <div className="w-full flex flex-col gap-2.5">
          <div className="flex flex-row items-start gap-1">
            <div className="font-normal text-xs uppercase">
              #{postData.category}
            </div>
            <div className="text-[#828282] font-light text-xs capitalize shrink-0 max-w-3/5">
              | {postData.title[locale]}
            </div>
            <BookmarkButton id={postData.id}></BookmarkButton>
          </div>
          <div className="text-[#1D1B20] font-bold text-2xl">
            {postData.excerpt[locale]}
          </div>
          <div className="text-[#828282] font-light text-xl">
            {postData.content[locale]}
          </div>
        </div>
      ) : (
        <div className="text-[#1D1B20] font-bold text-2xl">
          No data to display
        </div>
      )}
    </div>
  );
}
