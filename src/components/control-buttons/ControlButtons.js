import Draggable from 'react-draggable';
import './ControlButtons.css';
import { useState } from 'react';

function ControlButtons({ currentComponent, setCurrentComponent }) {
    const [isDragging, setIsDragging] = useState(true);
    

    const handleBack = () => {
        if (isDragging) return;
        if (currentComponent === 'MoneyGame' || currentComponent === 'ClickBalls' || currentComponent === 'TheDisturbance') {
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