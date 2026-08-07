import { TSuggestedItemData } from '@/app/_common/types/dataTypes';

export default function SuggestedItem({ data }: { data: TSuggestedItemData }) {
  return (
    <div className="w-full flex items-center gap-3 justify-items-start text-black font-roboto-flex cursor-pointer">
      <div className="w-full flex flex-col gap-2">
        <div className="flex flex-row items-center gap-1">
          <div className="text-[#828282] font-light text-xs capitalize">
            {data.category} |
          </div>
          <div className="font-normal text-xs uppercase">#{data.title.en}</div>
        </div>
        <div className="text-[#1D1B20] font-semibold text-base">
          {data.excerpt.en}
        </div>
      </div>
    </div>
  );
}
