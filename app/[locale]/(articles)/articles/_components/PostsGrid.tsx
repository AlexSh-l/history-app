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
  // const locale = i18n.resolvedLanguage || "be";

  const { data, isPending } = useQuery({
    queryKey: ["articles"],
    queryFn: () => fetchArticles(),
  });

  useEffect(() => {
    console.log("tere", data);
    // console.log("few", i18n.language, data && data[0]?.title[locale]);
  }, [data, locale]);

  return (
    <div className="w-full flex flex-col flex-1 items-center justify-start bg-zinc-50 font-sans dark:bg-black">
      {isPending && <>Pending...</>}
      {!isPending && (
        <div className="w-full">
          <div className="uppercase pb-5">Latest</div>
          <div className="grid grid-cols-2 gap-y-15 gap-x-10">
            {data.map((item: TSuggestedItemData, i: number) => (
              <PostCard data={item} key={`Article-Card_${i}`}></PostCard>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
