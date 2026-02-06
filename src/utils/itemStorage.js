import { Item as mockItem } from "./mockData";

const STORAGE_KEY = "items";

export function getItem() {
  const stored = localStorage.getItem(STORAGE_KEY);

  if (!stored) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(mockItem));
    return mockItem;
  }

  const storedItem = JSON.parse(stored);

  const storedIds = new Set(storedItem.map((b) => b.id));
  const newMockItem = mockItem.filter((b) => !storedIds.has(b.id));

  if (newMockItem.length > 0) {
    const merged = [...newMockItem, ...storedItem];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
    return merged;
  }

  return storedItem;
}

export function saveItem(items) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

export function resetItem() {
  localStorage.removeItem(STORAGE_KEY);
  window.location.reload();
}
