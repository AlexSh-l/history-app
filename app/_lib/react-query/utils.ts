import { TSuggestedItemData } from '@/app/_common/types/dataTypes';

export async function fetchArticles() {
  const requestResult = await fetch("/mock-articles.json");
  const result = await requestResult.json();
  return result;
}

export type TFetchArticlesByTitleProps = TSuggestedItemData & {
  locale: string;
};

export function fetchArticlesByTitle<T extends TFetchArticlesByTitleProps>(
  data: Array<T>,
  title: string,
  locale: string,
) {
  if (!data || !data.length || !title) {
    return [];
  }

  return data.filter((item: T) => {
    if (!item) return [];
    return item.title[locale].toLowerCase().includes(title.toLowerCase());
  });
}
