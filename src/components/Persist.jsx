import React, { useEffect, useState } from "react";

export default function Persist(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const timerId = setTimeout(() => {
      controller.abort();
    }, 5000);
    const fetchRequest = async () => {
      try {
        const response = await fetch(url, { signal: controller.signal });
        if (!response.ok) {
          throw new Error("Error loading data");
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        if (err.name === "AbortError") {
          setError("Request timeout. Network is unstable");
        } else {
          setError(err.message);
        }
      } finally {
        setLoading(false);
        clearTimeout(timerId);
      }
    };
    fetchRequest();
  }, [url]);
  return { data, loading, error };
}
