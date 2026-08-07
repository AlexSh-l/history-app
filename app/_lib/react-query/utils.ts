import { TSuggestedItemData } from '@/app/_common/types/dataTypes';

export async function fetchArticles() {
  const requestResult = await fetch("/mock-articles.json");
  const result = await requestResult.json();
  return result;
}

export function fetchArticlesByTitle<T extends TSuggestedItemData>(
  data: Array<T>,
  title: string,
) {
  if (!data || !data.length || !title) {
    return [];
  }

  return data.filter((item: T) => {
    if (!item) return [];
    return item.title.en.toLowerCase().includes(title.toLowerCase());
  });
}
