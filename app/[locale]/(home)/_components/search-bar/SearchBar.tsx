"use client";

import { useParams } from 'next/navigation';
import { useDeferredValue, useEffect, useMemo, useState } from 'react';

import { useDebounce } from '@/app/_common/hooks/useDebounce';
import LookingGlass from '@/app/_common/icons/search-bar/LookingGlass';
import {
    fetchArticles, fetchArticlesByTitle, TFetchArticlesByTitleProps
} from '@/app/_lib/react-query/utils';
import { useQuery } from '@tanstack/react-query';

import SuggestedItem from './SuggestedItem';
import Suggestions from './Suggestions';

export default function SearchBar() {
  const params = useParams();
  const locale = params.locale as string;

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [value, setValue] = useState("");
  // const deferredValue = useDeferredValue(value);
  const deferredValue = useDebounce(value, 300);

  const { data } = useQuery({
    queryKey: ["suggested-articles"],
    queryFn: () => fetchArticles(),
  });

  const filteredItems = useMemo(
    () =>
      fetchArticlesByTitle<TFetchArticlesByTitleProps>(
        data,
        deferredValue,
        locale,
      ),
    [deferredValue],
  );

  useEffect(() => {
    if (filteredItems.length) setIsDropdownOpen(true);
    else setIsDropdownOpen(false);
  }, [filteredItems]);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target?.value;
    setValue(inputValue);
  };

  return (
    <div className="relative w-full max-w-2xl">
      <div className="flex items-center gap-3 justify-items-start bg-[#22262A0D] py-2 px-1.5 border-white border-2 rounded-[65px] w-full backdrop-blur-[5px] shadow-[0_0_200px_0_rgba(255,255,255,0.25)]">
        <LookingGlass></LookingGlass>
        <input
          value={value}
          onChange={handleInput}
          type="text"
          className="text-white text-base font-normal font-roboto-flex focus:outline-none caret-white w-full"
        ></input>
      </div>

      {isDropdownOpen && (
        <Suggestions>
          {filteredItems.map((item, i) => (
            <SuggestedItem
              data={item}
              key={`Suggested-Item_${i}`}
            ></SuggestedItem>
          ))}
        </Suggestions>
      )}
    </div>
  );
}
