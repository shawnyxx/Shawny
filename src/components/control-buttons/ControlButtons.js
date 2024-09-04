// Control Buttons to navigate back and refresh the page
// Still in development because it works weird on mobile
// Shawnyxx - [UNFINISHED]

// Import libraries
import Draggable from 'react-draggable';
import './ControlButtons.css';
import { useState, useEffect } from 'react';

// ControlButtons component
function ControlButtons({ currentComponent, setCurrentComponent }) {
    // State variables
    const [isDragging, setIsDragging] = useState(true);

    const handleBack = () => {
        if (isDragging) {
            return;
        } else {
            setCurrentComponent('Home');
        }
    }

    const handleRefresh = () => {
        if (isDragging) return;
        window.location.reload();
    }

    return (
        <>
            <Draggable
                onStart={() => setIsDragging(false)}
                onDrag={() => setIsDragging(true)}
                onStop={() => setTimeout(() => setIsDragging(false), 0)}
            >
                <button className="RefreshButton" onClick={handleRefresh} />
            </Draggable>

            <Draggable
                defaultPosition={{ x: 50, y: 0 }}
                onStart={() => setIsDragging(false)}
                onDrag={() => setIsDragging(true)}
                onStop={() => setTimeout(() => setIsDragging(false), 0)}
            >
                <button className="BackButton" onClick={handleBack} />
            </Draggable>
        </>
    );
}

export default ControlButtons;