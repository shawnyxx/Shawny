// This component shows mutliple options like the music and stuff
// Shawnyxx - [COMPLETED]

// Importing the necessary libraries and tools
import { useEffect, useRef } from 'react';
import MusicPlayer from './components/MusicPlayer';
import DevsInfos from './components/DevsInfos';
import News from './components/News';

// Function for the component
function Widgets() {
    // If the device is a desktop, the music player will take a width of 350px and if the device is a mobile, the music player will take the whole width of the screen.
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        let isScrolling;

        const handleScroll = () => {
            window.clearTimeout(isScrolling);

            isScrolling = setTimeout(() => {
                const children = container.children;
                let closestChild = null;
                let closestDistance = Infinity;

                for (let child of children) {
                    const rect = child.getBoundingClientRect();
                    const distance = Math.abs(rect.left - container.getBoundingClientRect().left);
                    if (distance < closestDistance) {
                        closestDistance = distance;
                        closestChild = child;
                    }
                }

                if (closestChild) {
                    closestChild.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
                }
            }, 100); // Debounce the scroll event
        };

        container.addEventListener('scroll', handleScroll);
        return () => container.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={ window.innerWidth > 1024 ? "flex flex-row items-center justify-end absolute w-1/4 h-[75px] top-[5%] right-0 z-20" : "flex flex-row items-center justify-end absolute w-full h-[75px] top-[5%] right-[-4px] z-20" }>
            <div className="bg-black bg-opacity-50 backdrop-blur-md border-t border-b border-l border-white rounded-l translate-x-[95%] w-full h-full transition-all duration-300 hover:-translate-x-0">
                <div ref={containerRef} className="flex flex-row items-center justify-start text-white h-full snap-x snap-proximity overflow-x-auto overflow-y-hidden" style={{ scrollbarWidth: 'none', scrollBehavior: 'smooth' }}>
                    <div className="w-full pl-[5%] flex-shrink-0 snap-center">
                        <MusicPlayer />
                    </div>

                    <div className="w-full pl-4 flex-shrink-0 snap-center">
                        <DevsInfos />
                    </div>
                    
                    <div className="w-full pl-4 flex-shrink-0 snap-center">
                        <News />
                    </div>

                    <div className="w-full pl-4 flex-shrink-0 snap-center">
                        <p>More is coming...</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Widgets;