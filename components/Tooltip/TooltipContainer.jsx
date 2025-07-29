import React from "react";
import useToggle from "../../hooks/useToggle";

const TooltipContext = React.createContext();
export { TooltipContext };

export default function TooltipContainer({ children }) {
  const [open, toggleOpen] = useToggle({
    initialValue: false,
  });

  return (
    <TooltipContext.Provider value={{ open, toggleOpen }}>
      <div className="tooltip-container">{children}</div>
    </TooltipContext.Provider>
  );
}
