import { useEffect, useState } from 'react';

const useFetch = (url, singleResource) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        if (singleResource) {
          const data = await res.json();
          setResponse(data);
        } else {
          const { top: data } = await res.json();
          setResponse(data);
        }
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { response, loading, error };
};

export default useFetch;
