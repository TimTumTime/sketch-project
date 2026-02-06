import Slider from "@mui/material/Slider";
import { useCanvasContext } from "../../Context";
import "./ToolBar.css";
import Button from "../Button/Button";

const ToolBar = () => {
  const {
    thickness: thickness,
    setThickness: setThickness,
    red: red,
    green: green,
    blue: blue,
    setRed: setRed,
    setGreen: setGreen,
    setBlue: setBlue,
    handleColor: handleColor,
    isToolbarOpen: isToolbarOpen,
    closeToolbar: closeToolbar,
  } = useCanvasContext();

  const valueText = (value) => {
    return `${value} `;
  };

  const handleRed = (e) => {
    setRed(e.target.value);
    handleColor();
  };
  const handleGreen = (e) => {
    setGreen(e.target.value);
    handleColor();
  };

  const handleBlue = (e) => {
    setBlue(e.target.value);
    handleColor();
  };

  return (
    <aside className={isToolbarOpen ? "toolbar show-toolbar" : "toolbar"}>
      <h2>This is a toolbar</h2>
      <div className="thickness-slider">
        <Slider
          aria-label="Custom Values"
          getAriaValueText={valueText}
          size="small"
          value={thickness}
          onChange={(e) => setThickness(e.target.value)}
          min={0}
          max={100}
        />
      </div>
      <div className="color-sliders">
        <span>
          <Slider
            aria-label="Custom Values"
            getAriaValueText={valueText}
            size="small"
            value={red}
            onChange={handleRed}
            orientation="vertical"
            min={0}
            max={255}
          />
          <Slider
            aria-label="Custom Values"
            getAriaValueText={valueText}
            size="small"
            value={green}
            onChange={handleGreen}
            orientation="vertical"
            min={0}
            max={255}
          />
          <Slider
            aria-label="Custom Values"
            getAriaValueText={valueText}
            size="small"
            value={blue}
            onChange={handleBlue}
            orientation="vertical"
            min={0}
            max={255}
          />
        </span>
      </div>
      <div className="close-button">
        <Button handleClick={closeToolbar}>Close</Button>
      </div>
    </aside>
  );
};

export default ToolBar;
