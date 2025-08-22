/**
 * sessionStorage的基本操作
 */
export const STORAGE_KEY = { sessionStore: '__session_store__' };

const STORAGE = sessionStorage;

function settingStorage(prefix: string) {
  let storage: any = getObjFromStorage();

  return {
    get(key: string) {
      return key ? storage[key] : undefined;
    },
    setAll(sourceData: any) {
      storage = sourceData;
      STORAGE.setItem(prefix, JSON.stringify(storage));
    },
    set(key: string, value: any) {
      storage[key] = value;
      STORAGE.setItem(prefix, JSON.stringify(storage));
    },
    clear(keyArr: string[]) {
      if (keyArr.length === 0) {
        storage = {};
        STORAGE.setItem(prefix, '{}');
      } else {
        keyArr.forEach((key) => {
          delete storage[key];
        });
        STORAGE.setItem(prefix, JSON.stringify(storage));
      }
    },
  };
}

export function createStorage(prefix: string) {
  return settingStorage(prefix);
}

export function getObjFromStorage(prefix = STORAGE_KEY.sessionStore) {
  /** @type {Record<string, any>} */
  let storageData = STORAGE.getItem(prefix);
  storageData = storageData && storageData !== '[object Object]' ? JSON.parse(storageData) : {};
  return storageData;
}

export const storage = createStorage(STORAGE_KEY.sessionStore);
export default storage;
