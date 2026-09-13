"use client";

import { useParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

import { TFilters, TSuggestedItemData } from '@/app/_common/types/dataTypes';
import { fetchArticles } from '@/app/_lib/react-query/utils';
import { useQuery } from '@tanstack/react-query';

import FilterBar from './FilterBar.js';
import PostCard from './PostCard.tsx';

export default function PostGrid() {
  const filters = useRef<TFilters>({
    category: [],
    region: [],
  });
  const [activeFilters, setActiveFilters] = useState<TFilters>({
    category: [],
    region: [],
  });

  const setFilter = (key: string, item: string) => {
    if (activeFilters[key as keyof TFilters].includes(item)) {
      setActiveFilters((prev) => {
        const result: TFilters = {
          category: [],
          region: [],
        };

        const prevKeys = Object.keys(prev);
        prevKeys.map((keyEntry) => {
          const newArray =
            key === keyEntry
              ? [...prev[keyEntry as keyof TFilters], item]
              : [...prev[keyEntry as keyof TFilters]];
          result[keyEntry as keyof TFilters] = newArray;
        });
        return result;
      });
    } else {
      setActiveFilters((prev) => {
        const result: TFilters = {
          category: [],
          region: [],
        };

        const prevKeys = Object.keys(prev);
        prevKeys.map((keyEntry) => {
          const newArray =
            key === keyEntry
              ? prev[keyEntry as keyof TFilters].filter(
                  (entry) => entry !== item,
                )
              : [...prev[keyEntry as keyof TFilters]];
          result[keyEntry as keyof TFilters] = newArray;
        });
        return result;
      });
    }
  };

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["articles"],
    queryFn: () => fetchArticles(),
  });

  useEffect(() => {
    if (!data) return
    data.map((item: TSuggestedItemData) => {
      const filterKeys = Object.keys(filters.current);
      filterKeys.map((keyEntry) => {
        filters.current[keyEntry as keyof TFilters].push(
          item[keyEntry as keyof TFilters],
        );
      });
    });
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
      <div className="w-full">
        {/* <FilterBar
          categories={filters.current}
          filters={activeFilters}
          setFilter={setFilter}
        ></FilterBar> */}
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
