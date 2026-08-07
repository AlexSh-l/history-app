import Link from 'next/link';
import { useParams } from 'next/navigation';

import { TSuggestedItemData } from '@/app/_common/types/dataTypes';

export default function SuggestedItem({ data }: { data: TSuggestedItemData }) {
  const params = useParams();
  const locale = params.locale as string;

  return (
    <Link
      href={`/${locale}/article/${data.slug}`}
      className="w-full flex items-center gap-3 justify-items-start text-black font-roboto-flex cursor-pointer"
    >
      <div className="w-full flex flex-col gap-2">
        <div className="flex flex-row items-start gap-1">
          <div className="text-[#828282] font-light text-xs capitalize  shrink-0">
            {data.title[locale]} |
          </div>
          <div className="font-normal text-xs uppercase">#{data.category}</div>
        </div>
        <div className="text-[#1D1B20] font-semibold text-base">
          {data.excerpt[locale]}
        </div>
      </div>
    </Link>
  );
}
