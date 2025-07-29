import React from "react";
import {
  FaCheckCircle,
  FaExclamationTriangle,
  FaTimesCircle,
  FaInfoCircle,
} from "react-icons/fa";
import { ToastPopupContext } from "./ToastPopupContainer";

export default function ToastPopupTitle({ children }) {
  const { type } = React.useContext(ToastPopupContext);

  function selectIcon() {
    if (type === "success") {
      return <FaCheckCircle className="toast-popup-icon-success" />;
    }

    if (type === "warning") {
      return <FaExclamationTriangle className="toast-popup-icon-warning" />;
    }

    if (type === "error") {
      return <FaTimesCircle className="toast-popup-icon-error" />;
    }

    if (type === "neutral") {
      return <FaInfoCircle className="toast-popup-icon-neutral" />;
    }
  }

  return (
    <div className={"toast-popup-title"}>
      {selectIcon()}
      {children}
    </div>
  );
}
