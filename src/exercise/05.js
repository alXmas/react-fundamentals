// Styling
// http://localhost:3000/isolated/exercise/05.js

import React from 'react'
import '../box-styles.css'

function Box({className = '', style, size, ...rest}) {
  const sizeClassName = size ? `box--${size}` : ''
  const props = {
    className: `box ${className} ${sizeClassName}`,
    style: {fontStyle: 'italic', ...style},
    ...rest,
  }
  return <div {...props} />
}

function App() {
  return (
    <div>
      <Box size="small" style={{backgroundColor: 'lightblue'}}>
        small lightblue box
      </Box>
      <Box size="medium" style={{backgroundColor: 'pink'}}>
        medium pink box
      </Box>
      <Box size="large" style={{backgroundColor: 'orange'}}>
        large orange box
      </Box>
      <Box>sizeless box</Box>
    </div>
  )
}

export default App
