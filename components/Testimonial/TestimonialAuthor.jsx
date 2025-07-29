import React from "react";
import divider from "../../assets/Divider.png";

export default function TestimonialAuthor({ name, title }) {
  return (
    <div className="testimonial-author">
      <span className="name">{name}</span>
      <img src={divider} className="divider" />
      <span className="title">{title}</span>
    </div>
  );
}
