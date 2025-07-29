import React from "react";
import { MdOutlineClose } from "react-icons/md";
import { TooltipContext } from "./TooltipContainer";

export default function Tooltip({
  children,
  style = "bold",
  color = "neutral",
  icon = null,
}) {
  const { open } = React.useContext(TooltipContext);

  return open ? (
    <div className={`tooltip ${style} ${color}`}>
      <div className="icon-container">{icon}</div>
      <div className="tooltip-text">{children}</div>
    </div>
  ) : null;
}

/*<button className="close-button" onClick={toggleOpen}>
  <MdOutlineClose size="20px" />
</button>*/
