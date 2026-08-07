import { fetchArticles } from '@/app/_lib/react-query/utils';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

import SearchBar from './search-bar/SearchBar';

const queryClient = new QueryClient();

await queryClient.prefetchQuery({
  queryKey: ["suggested-articles"],
  queryFn: fetchArticles,
});

export default function MainBanner() {
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="p-7 relative flex flex-col items-center justify-center w-full h-145 text-xs text-white font-roboto-flex font-normal bg-blue-950">
        <div className="absolute top-0 left-0 w-full h-full bg-linear-to-b from-black/0 via-black/0 to-black/40 pointer-events-none"></div>
        <SearchBar></SearchBar>
      </div>
    </HydrationBoundary>
  );
}
