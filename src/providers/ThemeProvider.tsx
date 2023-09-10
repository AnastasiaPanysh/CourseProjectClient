import { createContext, useMemo, useState, ReactNode, useContext } from 'react';

// Определите тип контекста
type IThemeContextType = {
  isDark: boolean;
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ThemeContext = createContext<IThemeContextType>({
  isDark: false,
  setIsDark: () => {}, 
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isDark, setIsDark] = useState(true);

  const value = useMemo(() => ({ isDark, setIsDark }), [isDark]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
