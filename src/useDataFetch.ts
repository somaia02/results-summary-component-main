import { useEffect, useState } from "react";

export default function useDataFetch(url: string) {
  const [data, setData] = useState(null);
  useEffect(() => {
    let ignore = false;
    if (url) {
      async function fetchData() {
        const response = await fetch(url);
        const json = await response.json();
        if (!ignore) {
          setData(json);
        }
      }
      fetchData();
    }
    return () => {
      ignore = true;
    };
  }, [url]);
  return data;
}