import { useEffect } from 'react';

const PreventZoom = () => {
    useEffect(() => {
        const handleKeyDown = (event) => {
            if ((event.ctrlKey || event.metaKey) && (event.key === '+' || event.key === '=' || event.key === '-' || event.key === '_' || event.key === '0')) {
                event.preventDefault();
            }
        };

        const handleWheel = (event) => {
            if (event.ctrlKey || event.metaKey) {
                event.preventDefault();
            }
        };

        const handleTouchStart = (event) => {
            if (event.touches.length > 1) {
                event.preventDefault();
            }
        };

        const handleTouchMove = (event) => {
            if (event.touches.length > 1) {
                event.preventDefault();
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('wheel', handleWheel, { passive: false });
        document.addEventListener('touchstart', handleTouchStart, { passive: false });
        document.addEventListener('touchmove', handleTouchMove, { passive: false });

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('wheel', handleWheel);
            document.removeEventListener('touchstart', handleTouchStart);
            document.removeEventListener('touchmove', handleTouchMove);
        };
    }, []);

    return null;
};

export default PreventZoom;