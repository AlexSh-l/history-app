"use client";

import { useEffect } from 'react';

import { fetchArticles } from '@/app/_lib/react-query/utils';
import { useQuery } from '@tanstack/react-query';

export default function PostGrid() {
  const { data, isPending } = useQuery({
    queryKey: ["articles"],
    queryFn: () => fetchArticles(),
  });

  useEffect(() => {
    console.log("tere", data);
  }, [data]);

  return (
    <div>
      <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        {isPending && <>Pending</>}
      </div>
    </div>
  );
}
