import React from 'react'
import { useSpring, animated } from 'react-spring'

const Checkout = ({isCheckotOpen}) => {
    const animation = useSpring({
        transform: isCheckotOpen
            ? 'translate3d(0, 0, 0)'
            : 'translate3d(100%, 0, 0)'
    })

    return (
        <div className='checkout'>
            <animated.div className='checkout-left' style={animation} />
            <animated.div className='checkout-right' style={animation} />
        </div>
    )
}

export default Checkout
