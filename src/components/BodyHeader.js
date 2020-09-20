import React from "react";
import "../styles/BodyHeader.css";

const BodyHeader = ({ city }) => {
  return <div className="body-header-container">{city}</div>;
};

export default BodyHeader;
