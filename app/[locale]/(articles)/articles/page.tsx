import { getT } from 'next-i18next/server';

import { i18nConfigRouter } from '@/app/_lib/i18n/i18nConfig';
import { fetchArticles } from '@/app/_lib/react-query/utils';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

import PostGrid from './_components/PostsGrid';

export default async function Articles({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const resolvedParams = await params;

  const currentLocale = resolvedParams.locale || i18nConfigRouter.defaultLocale;

  const t = await getT(currentLocale, {keyPrefix: "common"});

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["articles"],
    queryFn: fetchArticles,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans">
        <main className="flex flex-1 w-full max-w-8xl flex-col items-center justify-between pt-32 py-7 px-8 bg-white">
          <PostGrid></PostGrid>
        </main>
      </div>
    </HydrationBoundary>
  );
}
