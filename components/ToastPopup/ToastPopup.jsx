import React from "react";
import { createPortal } from "react-dom";
import { ToastPopupContext } from "./ToastPopupContainer";

export default function ToastPopup({ children }) {
  const { type, open, visible } = React.useContext(ToastPopupContext);

  return open
    ? createPortal(
        <div
          className={`toast-popup toast-popup-${type} ${
            visible ? "visible" : ""
          }`}
        >
          {children}
        </div>,
        document.body
      )
    : null;
}
