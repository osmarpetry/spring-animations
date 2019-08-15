import React, { useState, useRef } from 'react'
import {
    animated,
    useChain,
    useSpring,
    useTransition
} from 'react-spring'

const items = [30, 40, 20, 100, 5]

const UseChainBoxes = () => {
    const [on, toggle] = useState(false)

    const springRef = useRef()
    const { size } = useSpring({
        ref: springRef,
        from: { size: '20%' },
        to: { size: on ? '100%' : '20%' }
    })

    const transitionRef = useRef()
    const transition = useTransition(on ? items : [], item => item, {
        ref: transitionRef,
        trail: 400 / items.length,
        from: {
            opacity: 0,
            transform: 'scale(0)'
        },
        enter: {
            opacity: 1,
            transform: 'scale(1)'
        },
        leave: {
            opacity: 0,
            transform: 'scale(0)'
        }
    }
    )

    useChain(on ? [springRef, transitionRef] : [transitionRef, springRef]);

    return (
        <div className='full-height'>
            <animated.div
                style={{
                    width: size,
                    height: size,
                    cursor: 'pointer'
                }}
                className='boxes-grid-two'
                onClick={() => toggle(!on)}>
                {transition.map(({ item, key, props }) => (
                    <animated.div className='box-two' key={key} style={props} />
                ))}
            </animated.div>
        </div>
    )
}

export default UseChainBoxes
