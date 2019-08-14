import React from 'react'
import { useSpring, animated, config } from 'react-spring'

const Checkout = ({ isCheckotOpen }) => {
    const { x } = useSpring({
        x: isCheckotOpen ? 0 : 100,
        config: config.wobbly
    })

    return (
        <div
            className='checkout'
            style={{
                pointerEvents: isCheckotOpen ? 'all' : 'none'
            }}>
            <animated.div
                className='checkout-left'
                style={{
                    transform: x.interpolate(x => `translate3d(${x * -1}%, 0, 0)`)
                }}
            />
            <animated.div
                className='checkout-right'
                style={{
                    transform: x.interpolate(x => `translate3d(${x}%, 0, 0)`)
                }} />
        </div>
    )
}

export default Checkout
