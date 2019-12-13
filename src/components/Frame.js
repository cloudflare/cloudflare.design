/** @jsx jsx */
import { jsx } from "../config";
import React, { useState } from "react";
import { createPortal } from "react-dom";

export default ({ children, ...props }) => {
  const [contentRef, setContentRef] = useState(null);
  const iframeHead =
    contentRef &&
    contentRef.contentWindow.document.getElementsByTagName("head")[0];
  const mountNode = contentRef && contentRef.contentWindow.document.body;
  const styleTags = [...document.getElementsByTagName("style")];
  const styles = styleTags.reduce((acc, curr) => {
    return acc.concat(curr.innerHTML);
  }, "");

  const styleTag = document.createElement("style");
  styleTag.innerHTML = styles;
  iframeHead && iframeHead.appendChild(styleTag);
  mountNode && (mountNode.style.transform = "scale(1)");
  mountNode && (mountNode.style.transformOrigin = "0 0");
  return (
    <iframe sx={{ height: "300px" }} {...props} ref={setContentRef}>
      {mountNode && createPortal(React.Children.only(children), mountNode)}
    </iframe>
  );
};
