type StoredItem<T> = {
  value: T;
  expiry: number;
};

// Item əlavə etmək (expiry optional, default: 15 dəqiqə)
export const setItem = <T>(key: string, value: T, ttlMinutes = 15) => {
  const now = new Date().getTime();
  const item: StoredItem<T> = {
    value,
    expiry: now + ttlMinutes * 60 * 1000, // millisecond
  };
  localStorage.setItem(key, JSON.stringify(item));
};

// read the Item
export const getItem = <T>(key: string): T | null => {
  const itemStr = localStorage.getItem(key);
  if (!itemStr) return null;

  try {
    const item: StoredItem<T> = JSON.parse(itemStr);
    const now = new Date().getTime();

    if (now > item.expiry) {
      // expiry keçib → remove və null qaytar
      localStorage.removeItem(key);
      return null;
    }

    return item.value;
  } catch {
    localStorage.removeItem(key);
    return null;
  }
};

// Item silmək
export const removeItem = (key: string) => {
  localStorage.removeItem(key);
};
