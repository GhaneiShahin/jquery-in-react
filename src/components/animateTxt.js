import React, { useEffect, useRef } from "react";
import { findDOMNode } from "react-dom";
import $ from "jquery";

//jquery dar react HOC
const AnimateTxt = ({ children }) => {
  const txt1 = useRef(null);
  useEffect(() => {
    $(findDOMNode(txt1.current)).animate({ height: "200px" }, "slow");
  }, []);

  return <div ref={txt1}>{children}</div>;
};

export default AnimateTxt;
