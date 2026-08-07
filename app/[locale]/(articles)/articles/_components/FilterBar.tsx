import { TFilters } from '@/app/_common/types/dataTypes';

type TFilterBarProps = {
  categories: TFilters;
  filters: TFilters;
  setFilter: (key: string, item: string) => void;
};

export default function FilterBar({
  categories,
  filters,
  setFilter,
}: TFilterBarProps) {
  return (
    <div className="w-full h-15 bg-[#F01B0D] text-white">
      {/* {categories.map((item, i) => {
        return <div key={`Filter-Bar-Item_${i}`}>{item}</div>;
      })} */}
    </div>
  );
}
