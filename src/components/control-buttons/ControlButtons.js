import React, { useState } from 'react';
import './ControlButtons.css';

let click_count = 0;

function DraggableButton({ className, onMouseDown, position, onClick }) {
    const [dragging, setDragging] = useState(false);
    const [currentPosition, setCurrentPosition] = useState(position);
    const [offset, setOffset] = useState({ x: 0, y: 0 });

    const onMouseMove = (e) => {
        if (dragging) {
            setCurrentPosition({
                x: e.clientX - offset.x,
                y: e.clientY - offset.y,
            });
        }
    };

    const onMouseUp = () => {
        setDragging(false);
    };

    const handleMouseDown = (e) => {
        const rect = e.target.getBoundingClientRect();
        setOffset({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
        setDragging(true);
        onMouseDown && onMouseDown(e);
    };

    React.useEffect(() => {
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
        return () => {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        };
    });

    return (
        <button
            className={`${className} ${dragging ? 'dragging' : ''}`}
            onMouseDown={handleMouseDown}
            onClick={onClick}
            style={{ position: 'absolute', left: currentPosition.x, top: currentPosition.y }}
        >
            {/* Remove {className} from here */}
        </button>
    );
}

function RefreshButton({ onClick }) {
    return <DraggableButton className="RefreshButton" onClick={onClick} position={{ x: 0, y: 0 }} />;
}

function BackButton({ onClick }) {
    return <DraggableButton className="BackButton" onClick={onClick} position={{ x: 50, y: 0 }} />;
}

function ControlButtons({ currentComponent, setCurrentComponent }) {
    const handleBackClick = () => {
        if (click_count === 1) {
            if (currentComponent === 'MoneyGame') {
                setCurrentComponent('Home');
            } else if (currentComponent === 'ClickBalls') {
                setCurrentComponent('Home');
            } else if (currentComponent === 'TheDisturbance') {
                setCurrentComponent('Home');
            }
        } else if (click_count < 2) {
            click_count++;
        }
        setTimeout(() => {
            click_count = 0;
        }, 300);
        console.log(click_count);
    };

    const handleRefreshClick = () => {
        if (click_count === 1) {
            window.location.reload();
        } else if (click_count < 2) {
            click_count++;
        }
        setTimeout(() => {
            click_count = 0;
        }, 300);
        console.log(click_count);
    };

    return (
        <>
            <RefreshButton onClick={handleRefreshClick} />
            <BackButton onClick={handleBackClick} />
        </>
    );
}

export default ControlButtons;