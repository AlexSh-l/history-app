"use client";

import { useT } from 'next-i18next/client';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect } from 'react';

import { TSuggestedItemData } from '@/app/_common/types/dataTypes';

export default function PostCard({ data }: { data: TSuggestedItemData }) {
  const params = useParams();
  const locale = params.locale as string;

  return (
    <Link href={`/${locale}/article/${data.slug}`} className="w-full flex flex-col ">
      <div className="h-80 bg-orange-200"></div>
      <div className="pt-5">
        <div className="w-full flex flex-col gap-2.5">
          <div className="flex flex-row items-start gap-1">
            <div className="font-normal text-xs uppercase">
              #{data.category}
            </div>
            <div className="text-[#828282] font-light text-xs capitalize shrink-0 max-w-3/5 truncate">
              | {data.title[locale]}
            </div>
          </div>
          <div className="text-[#1D1B20] font-bold text-2xl">
            {data.excerpt[locale]}
          </div>
          <div className="text-[#828282] font-light text-xl line-clamp-3">
            {data.content[locale]}
          </div>
        </div>
      </div>
    </Link>
  );
}
