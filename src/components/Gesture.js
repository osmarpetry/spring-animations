import React from 'react'
import { useGesture } from 'react-with-gesture'
import { animated, useSpring } from 'react-spring'

const Gesture = () => {
    const [{ xy }, set] = useSpring(() => ({ xy: [0, 0] }))
    const [{ x }, setX] = useSpring(() => ({ x: 0 }))

    const bind = useGesture(({ down, delta }) => {
        console.log(down, delta)
        set({ xy: down ? delta : [0, 0] })
    })


    const bindX = useGesture(({ down, delta }) => {
        console.log(down, delta)
        if (down) {
            setX({ x: delta[0] })
        } else {
            if (delta[0] > 400) {
                setX({ x: 500 })
            } else {
                setX({ x: 0 })
            }
        }
    })


    return (
        <>
            <animated.div
                {...bind()}
                className='box'
                style={{
                    transform: xy.interpolate((x, y) => `
                        translate3d(${x}px, ${y}px, 0)`
                    ),

                }}>
                <p>DRAG ME ALL DIRECTIONS!</p>
            </animated.div>
            <animated.div
                {...bindX()}
                className='box'
                style={{
                    opacity: x.interpolate({
                        map: Math.abs,
                        range: [0, 400],
                        output: [1, 0]
                    }),
                    transform: x.interpolate((x) => `
                        translate3d(${x}px, 0, 0)`
                    ),

                }}>
                <p>DRAG ME RIGHT AND LEFT!</p>
            </animated.div>
        </>
    )
}



export default Gesture
