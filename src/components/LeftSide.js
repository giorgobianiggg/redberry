import React from 'react'
import RedberryChessBrand from './RedberryChessBrand'
import BackgroundScheme from './BackgroundScheme'

function LeftSide() {
  return (
    <div className="flex col-span-1 w-full h-screen flex-col">
        <RedberryChessBrand />
        <BackgroundScheme />
    </div>
  )
}

export default LeftSide