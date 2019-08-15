import React from 'react'
import { useGesture } from 'react-with-gesture'
import { animated, useSpring } from 'react-spring'

const Gesture = () => {
    const [{ xy }, set] = useSpring(() => ({ xy: [0, 0] }))

    const bind = useGesture(({ down, delta }) => {
        console.log(down, delta)
        set({ xy: down ? delta : [0, 0] })
    })

    return (
        <animated.div
            {...bind()}
            className='box'
            style={{
                transform: xy.interpolate((x, y) => `
                    translate3d(${x}px, ${y}px, 0)`
                ),

            }}>
                <p>DRAG ME!</p>
        </animated.div>
    )
}



export default Gesture
