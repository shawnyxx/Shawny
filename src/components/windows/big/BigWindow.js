import './BigWindow.css';
import Draggable from 'react-draggable';
import BgBlur from '../../background-blur/BgBlur'
import { useState, useEffect } from 'react';

function BigWindow({ children, isVisible, onClose }) {
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


    const Window = () => (
        <div className="BigWindow">
            <Draggable disabled={isMobile} >
                <div className="BigWindowContent" onMouseDown={(e) => e.stopPropagation()} onTouchStart={(e) => e.stopPropagation()}>
                    {children}
                    <button className={`BigWindowButton default-button`} onClick={onClose}>Close</button>
                </div>
            </Draggable>
        </div>
    );

    const handleStateChange = () => {
        switch (isVisible) {
            case true:
                return <Window />;
            case false:
                return null;
            default:
                return null;
        }
    }

    return (
        handleStateChange()
    );
}

export default BigWindow;