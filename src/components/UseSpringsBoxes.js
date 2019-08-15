import React from 'react'
import { animated, useSprings } from 'react-spring'

const items = [30, 40, 20, 100, 5]

const UseSpringsBoxes = () => {
    const springs = useSprings(
        items.length,
        items.map(item => ({
            from: {
                transform: 'translate3d(-100%, 0, 0)'
            },
            to: {
                transform: `translate3d(${item}%, 0, 0)`
            }
        }))
    )

    return (
        <div className='boxes-grid'>
            {springs.map(animation => (
                <animated.div className='box' style={animation} />
            ))}
        </div>
    )
}

export default UseSpringsBoxes
