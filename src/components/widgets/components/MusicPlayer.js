import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import "../../../tailwind.css";

function MusicPlayer() {
    // Initialize the styles
    const albumCoverStyle = "h-[75px] w-[75px] bg-gray-300";

    // Temporary song object
    const songs = [
        {
            title: "Lullabi",
            album: "No Album",
            date: "2021",
            artist: "XavTheCave",
            audio: "files/sounds/soundtracks/Lullabi - XavTheCave.mp3",
            cover: "files/images/thumbnails/no-cover-icon.png",
        },
        {
            title: "Mockingbird",
            album: "No Album",
            date: "N/A",
            artist: "Piano Mage",
            audio: "files/sounds/soundtracks/Mockingbird - Piano Mage.mp3",
            cover: "files/images/thumbnails/mockingbird-by-piano-mage.png",
        },
        {
            title: "Don't Stop Believin'",
            album: "No Album",
            date: "N/A",
            artist: "Piano Mage",
            audio: "files/sounds/soundtracks/Don't Stop Believin' - Piano Mage.mp3",
            cover: "files/images/thumbnails/dont-stop-believin-by-piano-mage.png",            
        }        
    ];

    // Initialize the state
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [audio] = useState(new Audio(songs[0].audio));

    // Shuffle the songs
    const shuffler = () => {
        const nextSongIndex = Math.floor(Math.random() * songs.length);
        setCurrentSongIndex(nextSongIndex);
        audio.src = songs[nextSongIndex].audio;
        audio.play();
        setIsPlaying(true);
    };

    useEffect(() => {
        audio.addEventListener('ended', shuffler);
        return () => {
            audio.removeEventListener('ended', shuffler);
        };
    }, [audio]);

    const togglePlayPause = () => {
        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="w-full h-full flex flex-row items-center justify-start">
            <div className={albumCoverStyle}>
                <img src={songs[currentSongIndex].cover} className="object-cover h-full w-full" alt="Album Cover" />
            </div>

            <div className="flex flex-col items-start justify-start w-full p-2">
                <div className="flex flex-row items-center justify-center w-full">
                    <div className="w-full text-left overflow-x-scroll" style={{ scrollbarWidth: "none" }}>
                        <p className="text-lg">{songs[currentSongIndex].title}</p>
                    </div>
                    <div className="flex flex-row w-fit justify-end gap-2">
                        <button className="text-md font-iconfonx" onClick={shuffler}>&lt;</button>
                        <button className="text-md font-iconfonx" onClick={togglePlayPause}>
                            {isPlaying ? '=' : ']'}
                        </button>
                        <button className="text-md font-iconfonx" onClick={shuffler}>&gt;</button>
                    </div>
                </div>

                <div className="flex flex-row items-center justify-start w-full">
                    <p className="text-md">{songs[currentSongIndex].album}</p>
                </div>

                <div className="flex flex-row items-center justify-start w-full">
                    <p className="text-sm">by {songs[currentSongIndex].artist}</p>
                </div>
            </div>
        </div>
    );
}

MusicPlayer.propTypes = {
    songs: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        album: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        artist: PropTypes.string.isRequired,
        audio: PropTypes.string.isRequired,
        cover: PropTypes.string.isRequired,
    }))
};

export default MusicPlayer;