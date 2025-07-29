import React from "react";
import { ToastPopupContext } from "./ToastPopupContainer";

export default function ToastPopupElement({ children }) {
  const { showToast } = React.useContext(ToastPopupContext);

  return (
    <div className="toast-popup-element" onClick={showToast}>
      {children}
    </div>
  );
}
