import React from "react";
import { ImQuotesLeft } from "react-icons/im";

export default function TestimonialWithImageQuote({ children }) {
  return (
    <div className="testimonial-with-image-quote">
      <ImQuotesLeft className="quotation-mark" size="45px" />
      {children}
    </div>
  );
}
