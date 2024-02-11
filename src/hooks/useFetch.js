import { useEffect, useState } from "react";
import { useCache } from "../context/CacheContext";
import axios from "axios";

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function keyify(key) {
  return key.map((item) => JSON.stringify(item)).join("-");
}

export default function useFetch({
  key,
  initialEnabled = true,
  cache,
  ...axiosConfig
}) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const [error, setError] = useState();
  const { getCache, setCache, deleteCache } = useCache();

  const refetch = (hard = false) => {
    setLoading(true);
    setError(undefined);
    const cacheKey = keyify(key);
    if (cache?.enabled && getCache(cacheKey) !== undefined && !hard) {
      const val = getCache(cacheKey);
      delay(cache.suspense || 400).then(() => {
        setData(val);
        setLoading(false);
        setError(undefined);
      });
    } else {
      axios(axiosConfig)
        .then(({ data }) => {
          setData(data);
          if (cache?.enabled) setCache(cacheKey, data);
        })
        .catch((err) => {
          setError(err);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  function inValidate(invalidationKey) {
    deleteCache(keyify(invalidationKey));
  }

  useEffect(() => {
    if (initialEnabled) {
      refetch();
    }
  }, []);

  return { loading, data, error, refetch, inValidate };
}
