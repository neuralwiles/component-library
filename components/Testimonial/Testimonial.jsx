import React from "react";
import dotPattern from "../../assets/DotPattern.png";

export default function Testimonial({ children }) {
  return (
    <div className="testimonial">
      <img className="dot-pattern" src={dotPattern} />
      {children}
    </div>
  );
}
