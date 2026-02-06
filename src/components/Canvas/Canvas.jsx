import { useState, useRef } from "react";
import { Stage, Layer, Line } from "react-konva";
import { useCanvasContext } from "../../Context";
import { useKeyboardBinds } from "../../Hooks/useKeyboardBinds";
import ToolBar from "../Tool Bar/ToolBar";
import { FaAngleRight } from "react-icons/fa";

const Canvas = ({
  height = window.innerHeight,
  width = window.innerWidth,
  isToolBarPresent,
}) => {
  const [tool, setTool] = useState("pencil");
  const [lines, setLines] = useState([]);
  const isDrawing = useRef(false);

  const {
    openToolbar: openToolbar,
    thickness: thickness,
    color: color,
  } = useCanvasContext();

  const history = useRef([]);
  const historyStep = useRef(0);

  const handleUndo = () => {
    if (historyStep.current === 0) {
      return;
    }

    historyStep.current -= 1;
    const newLines = lines.slice(0, -1);
    console.log(newLines);
    setLines(newLines);
  };

  const handleRedo = () => {
    console.log("Redo Fired");
    if (historyStep.current === history.current.length) {
      return;
    }
    const newLines = lines.concat(history.current[historyStep.current]);
    historyStep.current += 1;
    setLines(newLines);
  };

  const handlePointerUp = () => {
    isDrawing.current = false;
    history.current = lines;
    historyStep.current += 1;
    console.log(history.current);
    console.log(lines);
  };

  const handlePointerDown = (e) => {
    isDrawing.current = true;
    const stage = e.target.getStage?.() ?? e.target;
    const pos = stage.getPointerPosition?.() ?? { x: e.clientX, y: e.clientY };
    const strokeWidth = thickness / 100;

    const pressure = e.evt?.pressure || 0.5;
    setLines([
      ...lines,
      {
        tool,
        points: [pos.x, pos.y],
        pressure: pressure,
        stroke: color,
        strokeWidth: strokeWidth,
      },
    ]);
  };

  const handlePointerMove = (e) => {
    if (!isDrawing.current) {
      return;
    }
    if (e.evt?.pointerType !== "pen" && e.evt?.pointerType !== "mouse") return;

    const stage = e.target.getStage?.();
    const point = stage.getPointerPosition?.() ?? {
      x: e.clientX,
      y: e.clientY,
    };
    const pressure = e.evt?.pressure || 0.5;

    setLines((prevLines) => {
      const lastLine = prevLines[prevLines.length - 1];

      const updatedLine = {
        ...lastLine,
        points: lastLine.points.concat([point.x, point.y]),
        pressure: pressure !== undefined ? pressure : lastLine.pressure,
      };

      return [...prevLines.slice(0, -1), updatedLine];
    });
  };

  useKeyboardBinds(["z"], handleUndo);
  useKeyboardBinds(["y"], handleRedo);

  return (
    <div>
      <select
        value={tool}
        onChange={(e) => {
          setTool(e.target.value);
        }}
      >
        <option value="pencil">Pencil</option>
        <option value="eraser">Eraser</option>
      </select>
      <Stage
        data-testid="canvas-stage"
        className="canvas"
        width={width}
        height={height}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
      >
        <Layer>
          {lines.map((line, i) => (
            <Line
              key={i}
              points={line.points}
              stroke={line.stroke}
              strokeWidth={line.strokeWidth}
              lineCap="round"
              globalCompositeOperation={
                line.tool === "eraser" ? "destination-out" : "source-over"
              }
            />
          ))}
        </Layer>
      </Stage>
      {isToolBarPresent && (
        <div>
          <button onClick={openToolbar} className="toolbar-toggle">
            <FaAngleRight />
          </button>
          <ToolBar />
        </div>
      )}
    </div>
  );
};

export default Canvas;
