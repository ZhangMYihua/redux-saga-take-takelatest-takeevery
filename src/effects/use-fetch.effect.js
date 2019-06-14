import { useState, useEffect } from 'react';

const useFetch = url => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url);
      const dataArray = await res.json();
      setData(dataArray[0]);
    };

    fetchData();
  });

  return data;
};

export default useFetch;
