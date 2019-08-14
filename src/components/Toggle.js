import React, { useState } from 'react'
import { useTransition, animated } from 'react-spring'

const AnimatedTigle = animated.h1

const Toggle = () => {
    const [isToggled, setToggle] = useState(false)
    const transition = useTransition(isToggled, null, {
        from: {
            fontSize: '5rem',
            color: 'blue',
            y: 0
        },
        enter: {
            fontSize: '2em',
            color: 'pink',
            y: -50
        },
        leave: {
            fontSize: '5rem',
            color: 'blue',
            y: 0
        },
    })

    return (
        <div>
            {transition.map(
                ({ item, key, props }) =>
                    item && (
                        <AnimatedTigle key={key} stlye={props}>
                            Hello
                        </AnimatedTigle>
                    )
            )}
            <button onClick={() => setToggle(!isToggled)}>Toggle</button>
        </div >
    )
}


export default Toggle
