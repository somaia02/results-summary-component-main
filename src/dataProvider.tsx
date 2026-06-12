import { createContext, useContext } from 'react';
import type { PropsWithChildren } from 'react';

import useDataFetch from './useDataFetch';

interface Data {
  category: string,
  score: string,
  icon: string,
  color: string
};
const DataContext = createContext<Data[] | null>(null);

export default function DataProvider({ children }: PropsWithChildren) {
  const data = useDataFetch('../data.json');
  return (
  <DataContext.Provider value={data}>
    {children}
  </DataContext.Provider>
  );
}

export function useData() {
  const context = useContext(DataContext);
  return context;
}