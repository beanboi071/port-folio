import React from 'react'
import StrippedCircle from './StrippedCircle'

export default function AboutMe() {
  return (
    <div className=' flex justify-center items-center '>
      <div className='w-3/4 '>
        <div className="w-16 h-12 border-2 ">
          <StrippedCircle postAnimation={'about1'} aos={true} noOfStrips={20} startingAngle={180} length={4} breadth={1} isSpinning={false} reverse={false} spinDuration={12} equalSpacing={true} gap={0} opacity={100} />
        </div>
      </div>
    </div>
  )
}
