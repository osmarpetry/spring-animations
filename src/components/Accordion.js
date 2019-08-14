import React, {useState} from 'react'
import { useSpring, animated } from 'react-spring'
import useMeasure from '../utils/useMeasure'

const Accordion = () => {
    const [on, toggle] = useState(false)
    const [bind, {height, top}] = useMeasure()
    const animation = useSpring({
        overflow: 'hidden',
        height: on ? height + top * 2 : 0
    })

    return (
        <div>
            <button onClick={() => toggle(!on)}>Accordion toggle</button>
            <animated.div style={animation}>
                <div {...bind} className='accordion'>
                    <p>It's a accordion open</p>
                </div>
            </animated.div>
        </div>
    )
}

export default Accordion
