import React from "react";
import { TooltipContext } from "./TooltipContainer";

export default function TooltipElement({ children }) {
  const { toggleOpen } = React.useContext(TooltipContext);

  return (
    <div
      className="tooltip-element"
      onMouseEnter={toggleOpen}
      onMouseLeave={toggleOpen}
    >
      {children}
    </div>
  );
}
