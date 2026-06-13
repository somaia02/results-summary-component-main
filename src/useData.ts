import { useEffect, useState } from "react";

interface Data {
  category: string,
  score: string,
  icon: string,
  color: string
};


export default function useData(url: string) {
  const [data, setData] = useState<Data[] | null>(null);
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