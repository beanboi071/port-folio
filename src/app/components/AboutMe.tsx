import React from 'react'
import StrippedCircle from './StrippedCircle'
import ObservableComponent from './ObservableComponent'

export default function AboutMe() {
  return (
    <div className=' flex justify-center items-center '>
      <div className='w-3/4 '>
        <ObservableComponent>
          <div className="w-36 h-36 absolute ">
            <StrippedCircle postAnimation={'about'} aos={true} noOfStrips={12} startingAngle={180} length={2} breadth={2} isSpinning={false} reverse={false} spinDuration={12} equalSpacing={true} gap={5} opacity={80} />
            <h1 className=" flex h-full justify-center items-center text-4xl">1</h1>
          </div>
        </ObservableComponent>
      </div>

    </div>
  )
}
