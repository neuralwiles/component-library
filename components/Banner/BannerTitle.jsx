import React from "react";
import {
  FaCheckCircle,
  FaExclamationTriangle,
  FaTimesCircle,
  FaInfoCircle,
} from "react-icons/fa";
import { BannerContext } from "./Banner";

export default function BannerTitle({ children }) {
  const type = React.useContext(BannerContext);

  function selectIcon() {
    if (type === "success") {
      return <FaCheckCircle className="banner-icon-success" />;
    }

    if (type === "warning") {
      return <FaExclamationTriangle className="banner-icon-warning" />;
    }

    if (type === "error") {
      return <FaTimesCircle className="banner-icon-error" />;
    }

    if (type === "neutral") {
      return <FaInfoCircle className="banner-icon-neutral" />;
    }
  }

  return (
    <div className={"banner-title"}>
      {selectIcon()}
      {children}
    </div>
  );
}
