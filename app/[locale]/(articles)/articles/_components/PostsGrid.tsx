"use client";

import { useT } from 'next-i18next/client';
import { useParams } from 'next/navigation';
import { useEffect } from 'react';

import { TSuggestedItemData } from '@/app/_common/types/dataTypes';
import { fetchArticles } from '@/app/_lib/react-query/utils';
import { useQuery } from '@tanstack/react-query';

import PostCard from './PostCard.tsx';

export default function PostGrid() {
  // const { t, i18n } = useT("common");
  const params = useParams();
  const locale = params.locale as string;

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["articles"],
    queryFn: () => fetchArticles(),
  });

  useEffect(() => {
    console.log("tere", data);
  }, [data, locale]);

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
      <div className="w-full">
        <div className="uppercase pb-5">Latest</div>
        <div className="grid grid-cols-2 gap-y-15 gap-x-10">
          {data.map((item: TSuggestedItemData, i: number) => (
            <PostCard data={item} key={`Article-Card_${i}`}></PostCard>
          ))}
        </div>
      </div>
    </div>
  );
}
