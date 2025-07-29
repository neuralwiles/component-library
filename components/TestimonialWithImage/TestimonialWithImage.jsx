import React from "react";

export default function TestimonialWithImage({ children, src }) {
  return (
    <div className="testimonial-with-image">
      <div className="photo-container">
        <img className="photo" src={src} />
      </div>
      {children}
    </div>
  );
}
