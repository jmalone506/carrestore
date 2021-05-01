import React from "react";

// This Container component allows us to use a bootstrap container without worrying about class names
export function Container({ flex, center, fluid, children }) {
  return <div className={`container${fluid ? "-fluid" : ""}${center ? "-justify-content-center" : ""}${flex ? "-d-flex" : ""}`}>{children}</div>;
}
