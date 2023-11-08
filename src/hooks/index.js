import React, { useContext, useState, createContext } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  /* const [cart, setCart] = useState([]);

  const value = { cart, setCart }; */

  const [currentOrder, setCurrentOrder] = useState();

  const value = { currentOrder, setCurrentOrder };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export function useAppContext() {
  return useContext(AppContext);
}
