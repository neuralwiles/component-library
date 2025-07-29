import React from "react";

const ToastPopupContext = React.createContext();
export { ToastPopupContext };

export default function ToastPopupContainer({ children, type = "neutral" }) {
  const [open, setOpen] = React.useState(false);

  function showToast() {
    setOpen(true);

    // The problem is that the following sets open to false after the delay, which immediately removes the element from the DOM, not allowing for any chance for the transition.
    // I tried moving the visible state and useEffect expression up to this component to see if that would fix it, but it didn't. At least not the way I did it anyway.

    setTimeout(() => {
      hideToast();
    }, 3000);
  }

  function hideToast() {
    setOpen(false);
  }

  return (
    <ToastPopupContext.Provider value={{ type, open, showToast, hideToast }}>
      <div className="toast-popup-container">{children}</div>
    </ToastPopupContext.Provider>
  );
}
