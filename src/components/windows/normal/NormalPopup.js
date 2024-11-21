import React from 'react';
import './NormalPopup.css';
import BgBlur from '../../background-blur/BgBlur';
import Draggable from 'react-draggable';
import { useState, useEffect } from 'react';

function NormalPopup({ children }) {
    const [isVisible, setIsVisible] = useState(true);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            {isVisible && (
                <BgBlur className="NormalWindow">
                    <Draggable disabled={isMobile} defaultPosition={{ x: 0, y: 0 }}>
                        <div className="NormalPopup">
                            {children}
                            <button className={`default-button close-button`} onClick={() => setIsVisible(false)} >Close</button>
                        </div>
                    </Draggable>
                </BgBlur>
            )}
        </>
    );
}

export default NormalPopup;