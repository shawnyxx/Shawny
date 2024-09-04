import './BigWindow.css';
import React, { useState, useRef, useEffect } from 'react';

function BigWindow({ children, buttons, onClose }) {
    const [isDragging, setIsDragging] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
    const windowRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (isDragging) {
                setPosition({
                    x: e.clientX - dragStart.x,
                    y: e.clientY - dragStart.y,
                });
            }
        };

        const handleMouseUp = () => {
            setIsDragging(false);
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging, dragStart]);

    const handleMouseDown = (e) => {
        const rect = windowRef.current.getBoundingClientRect();
        setDragStart({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
        setIsDragging(true);
    };

    return (
        <div
            ref={windowRef}
            className="BigWindow"
            style={{
                position: 'absolute',
                left: `${position.x}px`,
                top: `${position.y}px`,
                cursor: isDragging ? 'grabbing' : 'default'
            }}
            onMouseDown={handleMouseDown}
        >
            <div
                className="BigWindowContent"
                style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
            >
                {children}
            </div>
            <div className="BigWindowButtonsContainer">
                <button className="BigWindowButton default-button" onClick={onClose}>Close</button>
                {buttons}
            </div>
        </div>
    );
}

export default BigWindow;
