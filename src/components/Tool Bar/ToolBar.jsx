import React from "react";
import { useGlobalContext } from "../../Context";

const ToolBar = () => {
  const { isToolbarOpen: isToolbarOpen, closeToolbar: closeToolbar } =
    useGlobalContext();
  return (
    <aside className={isToolbarOpen ? "toolbar show-toolbar" : "toolbar"}>
      <h2>This is a toolbar</h2>
      <button onClick={closeToolbar}>Close</button>
    </aside>
  );
};

export default ToolBar;
