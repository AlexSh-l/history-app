import { fetchArticles } from '@/app/_lib/react-query/utils';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

import PostGrid from './_components/PostsGrid';

export default async function Articles() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["articles"],
    queryFn: fetchArticles,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans">
        <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white">
          <PostGrid></PostGrid>
        </main>
      </div>
    </HydrationBoundary>
  );
}
