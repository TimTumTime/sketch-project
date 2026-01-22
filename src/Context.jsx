import { useState, useContext, createContext } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isToolbarOpen, setIsToolbarOpen] = useState(false);
  const [learningView, setLearningView] = useState("levels");
  const [proficiency, setProficiency] = useState(null);

  const openToolbar = () => {
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
        learningView,
        setLearningView,
        proficiency,
        setProficiency,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
