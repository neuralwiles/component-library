import React from "react";

const BannerContext = React.createContext();
export { BannerContext };

export default function Banner({ children, type = "neutral" }) {
  return (
    <BannerContext.Provider value={type}>
      <div className={`banner banner-${type}`}>{children}</div>
    </BannerContext.Provider>
  );
}
