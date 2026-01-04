import React from "react";
import { useState, useRef } from "react";

import { Stage, Layer, Line } from "react-konva";

const Canvas = ({ height = window.innerHeight, width = window.innerWidth }) => {
  const [tool, setTool] = useState("pencil");
  const [lines, setLines] = useState([]);
  const isDrawing = useRef(false);

  const handleMouseDown = (e) => {
    console.log("mouse down");
    isDrawing.current = true;
    const pos = e.target.getStage().getPointerPosition();
    setLines([...lines, { tool, points: [pos.x, pos.y] }]);
  };

  const handleMouseMove = (e) => {
    // no drawing - skipping
    if (!isDrawing.current) {
      return;
    }
    const stage = e.target.getStage();
    const point = stage.getPointerPosition();
    let lastLine = lines[lines.length - 1];
    // add points
    lastLine.points = lastLine.points.concat([point.x, point.y]);

    // replace last
    lines.splice(lines.length - 1, 1, lastLine);
    setLines(lines.concat());
  };

  const handleMouseUp = () => {
    isDrawing.current = false;
  };

  const handlePointerDown = (e) => {
    console.log("pointer down");
    isDrawing.current = true;
    const pos = e.target.getStage().getPointerPosition();

    const pressure = e.evt.pressure || 0.5;
    setLines([...lines, { tool, points: [pos.x, pos.y], pressure }]);
  };

  const handlePointerMove = (e) => {
    if (!isDrawing.current) {
      return;
    }
    if (e.evt.pointerType !== "pen" && e.evt.pointerType !== "mouse") return;

    const stage = e.target.getStage();
    const point = stage.getPointerPosition();
    const pressure = e.evt.pressure;

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
        className="canvas"
        width={width}
        height={height}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handleMouseUp}
      >
        <Layer>
          {lines.map((line, i) => (
            <Line
              key={i}
              points={line.points}
              stroke="black"
              strokeWidth={0.5}
              lineCap="round"
              globalCompositeOperation={
                line.tool === "eraser" ? "destination-out" : "source-over"
              }
            />
          ))}
        </Layer>
      </Stage>
    </div>
  );
};

export default Canvas;
