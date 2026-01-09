import { useState, useContext, createContext } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isToolbarOpen, setIsToolbarOpen] = useState(false);

  const openToolbar = () => {
    console.log("Toolbar OPen");
    setIsToolbarOpen(true);
  };

  const closeToolbar = () => {
    setIsToolbarOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        openToolbar,
        closeToolbar,
        isToolbarOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
