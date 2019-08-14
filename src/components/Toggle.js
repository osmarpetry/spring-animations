import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'

const AnimatedTigle = animated.h1

const Toggle = () => {
    const [isToggled, setToggle] = useState(false)
    const { fontSize, color, y } = useSpring({
        // opacity: isToggled ? 1 : 0,
        fontSize: isToggled ? '5rem' : '2em',
        color: isToggled ? 'blue' : 'pink',
        y: isToggled ? 0 : -50
    })

    return (
        <div>
            <AnimatedTigle
                style={{
                    transform: y
                    .interpolate({
                        range: [0, 0.25, 0.5, 0.75, 1],
                        output: [0, -25, -50, -100, -50]
                    })
                    .interpolate(y => `translate3d(0, ${y}px, 0)`),
                    fontSize,
                    color
                }}>
                Hello
            </AnimatedTigle>
            <button onClick={() => setToggle(!isToggled)}>Toggle</button>
        </div >
    )
}


export default Toggle
