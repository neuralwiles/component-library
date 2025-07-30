import React from "react";

const ToastPopupContext = React.createContext();
export { ToastPopupContext };

export default function ToastPopupContainer({ children, type = "neutral" }) {
  const [open, setOpen] = React.useState(false);
  const [visible, setVisible] = React.useState(false);

  function showToast() {
    setOpen(true);

    setTimeout(() => {
      setVisible(true);
    }, 100);

    setTimeout(() => {
      hideToast();
    }, 3000);
  }

  function hideToast() {
    setVisible(false);

    setTimeout(() => {
      setOpen(false);
    }, 500);
  }

  return (
    <ToastPopupContext.Provider value={{ type, open, visible, showToast }}>
      <div className="toast-popup-container">{children}</div>
    </ToastPopupContext.Provider>
  );
}
