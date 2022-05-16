import React from "react";

import "./Backdrop.css";

const backdrop = (props) => {
    
  const classStyle = [
    "Backdrop",
    props.show ? "backdropShow" : "backdropClosed",
  ];

  return <div className={classStyle.join(" ")}></div>;
};

export default backdrop;
