import './BigWindow.css';
import React, { useState, useRef, useEffect } from 'react';

function BigWindow({ children, buttons, onClose }) {
    const [isDragging, setIsDragging] = useState(false);
    const offset = useRef({ x: 0, y: 0 });
    const windowRef = useRef(null);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        const rect = windowRef.current.getBoundingClientRect();
        offset.current = {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        };
    };

    const handleMouseMove = (e) => {
        if (isDragging) {
            windowRef.current.style.left = `${e.clientX - offset.current.x}px`;
            windowRef.current.style.top = `${e.clientY - offset.current.y}px`;
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    return (
        <div
            ref={windowRef}
            className="BigWindow"
            style={{
                position: 'absolute',
                cursor: isDragging ? 'grabbing' : 'default'
            }}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
        >
            <div
                className="BigWindowContent"
                onMouseDown={handleMouseDown}
                style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
            >
                {children}
            </div>
            <div className="BigWindowButtonsContainer">
                <button className="BigWindowButton" onClick={onClose}>Close</button>
                {buttons}
            </div>
        </div>
    );
}

export default BigWindow;