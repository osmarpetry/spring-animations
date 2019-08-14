import React, { useState } from 'react'
import { useTransition, animated } from 'react-spring'

const Toggle = () => {
    const [items, setItems] = useState([
        {
            letter: 'O',
            key: 1
        },
        {
            letter: 'S',
            key: 2
        },
        {
            letter: 'M',
            key: 3
        },
        {
            letter: 'A',
            key: 4
        },
        {
            letter: 'R',
            key: 5
        }
    ])

    const transition = useTransition(items, item => item.key, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 }
      })

    return (
        <div>
            {transition.map(
                ({ item, key, props }) => (
                    <animated.h1 style={props} key={key}>
                        {item.letter}
                    </animated.h1>
                )
            )}
            <button
                onClick={() => setItems([
                    {
                        letter: 'O',
                        key: 1
                    }
                ])}>
                Toggle
            </button>
        </div >
    )
}


export default Toggle
