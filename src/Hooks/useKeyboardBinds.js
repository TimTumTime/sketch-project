import { useEffect, useCallback, useLayoutEffect, useRef } from "react";

export const useKeyboardBinds = (keys, callback, node = null) => {
  const callbackRef = useRef(callback);
  useLayoutEffect(() => {
    callback.current = callback;
  });

  const handleKeyDown = useCallback(
    (e) => {
      if (keys.some((key) => e.key === key && e.ctrlKey === true)) {
        callback.current(e);
      }
    },
    [keys],
  );

  useEffect(() => {
    const targetNode = node ?? document;
    targetNode.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown, node]);
};
