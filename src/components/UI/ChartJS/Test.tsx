import React from 'react'
import Highlight from "react-highlight";

export default function Test() {
  return (
    <div>
        <h1>Test</h1>
        <Highlight className="javascript">{
            `import React from 'react'
            export default function Test() {
              return (
                <div>Test</div>
              )
            }`
        }</Highlight>
    </div>
  )
}



