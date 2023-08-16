import React from "react";
import Highlight from "react-highlight";

export default function Test() {
  return (
    <div>
      <h1>Test</h1>
      <Highlight className="react">{`export default function Test() {
    return (
        <div>Test</div>
    )
}`}</Highlight>
    </div>
  );
}
