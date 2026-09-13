export function getFromLocalStorage(key: string) {
  if (typeof window !== "undefined" && window) {
    return window.localStorage.getItem(key);
  }
  return null;
}

export function saveToLocalStorage<T>(key: string, item: T) {
  if (typeof window !== "undefined" && window) {
    window.localStorage.setItem(key, JSON.stringify(item));
    return true;
  }
  return false;
}
