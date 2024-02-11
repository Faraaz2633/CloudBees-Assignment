import { createContext, useContext } from "react";

const CacheContext = createContext(null);

export function useCache() {
  return useContext(CacheContext);
}

export default function CacheProvider({ children }) {
  const map = new Map();

  function getCache(key) {
    const cacheValue = map?.get(key);
    if (!cacheValue) return undefined;
    return cacheValue;
  }

  function setCache(key, value) {
    map.set(key, value);
  }

  function clearCache() {
    map.clear();
  }

  function deleteCache(key) {
    map.delete(key);
  }

  const contextValue = {
    getCache,
    setCache,
    clearCache,
    deleteCache,
  };

  return (
    <CacheContext.Provider value={contextValue}>
      {children}
    </CacheContext.Provider>
  );
}
