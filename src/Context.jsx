import { useState, useContext, createContext } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [learningView, setLearningView] = useState("levels");
  const [proficiency, setProficiency] = useState(null);

  return (
    <AppContext.Provider
      value={{
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

export const CanvasContext = createContext();

export const CanvasProvider = ({ children }) => {
  const [isToolbarOpen, setIsToolbarOpen] = useState(false);
  const [thickness, setThickness] = useState(50);

  const [color, setColor] = useState("#000000");
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const openToolbar = () => {
    setIsToolbarOpen(true);
  };

  const closeToolbar = () => {
    setIsToolbarOpen(false);
  };

  const handleColor = () => {
    const redHex = red.toString(16);
    const greenHex = green.toString(16);
    const blueHex = blue.toString(16);

    const colorHex = `#${redHex}${greenHex}${blueHex}`;
    console.log(colorHex);
    setColor(colorHex);
  };

  return (
    <CanvasContext.Provider
      value={{
        openToolbar,
        closeToolbar,
        isToolbarOpen,
        thickness,
        setThickness,
        color,
        red,
        green,
        blue,
        setRed,
        setGreen,
        setBlue,
        handleColor,
      }}
    >
      {children}
    </CanvasContext.Provider>
  );
};

export const useCanvasContext = () => {
  return useContext(CanvasContext);
};
