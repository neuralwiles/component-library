import React from "react";
import { createPortal } from "react-dom";
import { ToastPopupContext } from "./ToastPopupContainer";

export default function ToastPopup({ children }) {
  const { type, open } = React.useContext(ToastPopupContext);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    if (open) {
      setVisible(true);
    } else {
      setVisible(false);

      // Previously I tried adding a setTimeout for setting visible to false and then calling hideToast (which I passed down through the context) after another delay, but that doesn't work for ??? reasons.
      // I think it also might call hideToast() on every render if it's a dependency... Maybe I need to wrap in callback function?

      /*setTimeout(() => {
        setVisible(false);
      }, 3000);

      setTimeout(() => {
        hideToast();
      }, 500);*/
    }
  }, [open]);

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
