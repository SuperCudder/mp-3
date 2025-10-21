import React, { createContext, useState, Dispatch, SetStateAction } from 'react';

/* define type for context val */
interface TitleContextType {
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;
  subtitle: string;
  setSubtitle: Dispatch<SetStateAction<string>>;
}

/* create context with a default val that matches type */
/* default functions are no-ops real functions will come from provider */
export const TitleContext = createContext<TitleContextType | undefined>(undefined);

/* provider component for title and subtitle */
export const TitleProvider = ({ children }: { children: React.ReactNode }) => {
  const [title, setTitle] = useState(''); /* state for main title */
  const [subtitle, setSubtitle] = useState(''); /* state for subtitle */

  return (
    <TitleContext.Provider value={{ title, setTitle, subtitle, setSubtitle }}>
      {children}
    </TitleContext.Provider>
  );
};