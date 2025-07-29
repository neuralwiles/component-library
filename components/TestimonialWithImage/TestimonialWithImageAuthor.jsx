import React from "react";

export default function TestimonialWithImageAuthor({ name, title }) {
  return (
    <div className="testimonial-with-image-author">
      <span className="name">{name}</span>
      <span className="title">{title}</span>
    </div>
  );
}
