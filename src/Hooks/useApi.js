import { useEffect, useState } from "react";

const headers = { "api-key": process.env.REACT_APP_API_KEY };

const useApi = function (url) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);
  // loading, error, data

  useEffect(() => {
    fetch(url, { headers })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
        setError(err);
      });
  }, [url]);

  return {
    loading,
    error,
    data,
  };
};

export default useApi;
