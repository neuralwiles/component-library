import React from "react";

export default function Badge({ children, shape = "square", color = "gray" }) {
  return (
    <div className={`badge badge-${shape} badge-${color}`}>{children}</div>
  );
}
