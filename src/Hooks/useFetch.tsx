import { useState, useEffect } from "react";

export function useFetch(url: string, options = {}) {
  console.log(url);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;

    setLoading(true);
    setError(null);

    const fetchData = async () => {
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        if (result) setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, JSON.stringify(options)]);

  return { data, loading, error };
}
