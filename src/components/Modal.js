import React from 'react'
import { animated, useTransition } from 'react-spring';


const Modal = ({ closeModal, animation, pointerEvents }) => {
    return (
        <div className='modal' style={{ pointerEvents }}>
            <animated.div className='modal-card' style={animation}>
                <button onClick={closeModal}>Close</button>
                <h1>Some random content</h1>
            </animated.div>
        </div>
    )
}

const ModalWrapper = ({ on, toggle }) => {
    const transition = useTransition(on, null, {
        from: { opacity: 0, transform: 'translate3d(0, -40px, 0)' },
        enter: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
        leave: { opacity: 0, transform: 'translate3d(0, -40px, 0)' }
    });
    const pointerEvents = on ? 'all' : 'none';

    return (
        <div>
            {transition.map(
                ({ item, key, props: animation }) =>
                    item && (
                        <Modal
                            pointerEvents={pointerEvents}
                            animation={animation}
                            closeModal={() => toggle(false)}
                        />
                    )
            )}
        </div>
    )
}


export default ModalWrapper
