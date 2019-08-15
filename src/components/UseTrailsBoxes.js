import React, { useState } from 'react'
import { animated, useTrail } from 'react-spring'

const items = [30, 40, 20, 100, 5]

const UseTrailsBoxes = () => {
    const [on, toggle] = useState(false)
    const springs = useTrail(
        items.length, {
            opacity: on ? 0 : 1,
            transform: on ? 'scale(0.3)' : 'scale(1)'
        }
    )

    return (
        <div className='boxes-grid'>
            <button onClick={() => toggle(!on)}>SHOW ME SOME BOXES MOVING!</button>
            {springs.map(animation => (
                <animated.div className='box' style={animation} />
            ))}
        </div>
    )
}

export default UseTrailsBoxes
