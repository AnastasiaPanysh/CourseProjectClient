import React, { createContext, Dispatch, SetStateAction, ReactNode, useState } from "react";

type TypeSetState<T> = Dispatch<SetStateAction<T>>;

interface IContent {
  type: "light" | "dark";
  setType: TypeSetState<"light" | "dark">;
}

const ThemeContext = createContext<IContent>({ type: "light", setType: () => {} });

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [type, setType] = useState<"light" | "dark">("light");

  return (
    <ThemeContext.Provider value={{ type, setType }}>
      {children}
    </ThemeContext.Provider>
  );
};
