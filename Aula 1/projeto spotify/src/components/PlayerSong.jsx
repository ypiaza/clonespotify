import React from 'react'
import { useParams } from 'react-router-dom'
import { songsArray } from '../assets/database/songs';
import { useState, useRef } from 'react';

const PlayerSong = () => {
    const { name } = useParams();
    const music = songsArray.find((item) => item.name === name);
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [time, setTime] = useState(0);

    const togglePlayPause = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleTimeUpdate = () => {
        setCurrentTime(music.current.currentTime);
    };

    const handleLoadedMetadata = () => {
        setTime(music.time);
    };

    const handleSeek = (e) => {
        const newTime = e.target.value;
        audioRef.current.currentTime = newTime;
        setCurrentTime(newTime);
    };


    return (
        <div className='absolute w-full top-0 flex justify-center items-center overflow-hidden h-[100vh] bg-gradient-to-b from-[#1DB954]/30 to-zinc-900'>
            {music ? (
                <div className='relative flex flex-col items-start p-5 justify-end h-full w-full bg-center bg-no-repeat bg-cover'
                    style={{
                        backgroundImage: `url(${music.image})`,
                    }}>
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-md"></div>
                    <div className='z-50 flex items-center justify-center'>
                        <img className='shadown shadow-2xl h-30 w-30' src={music.image} alt="Album image" />
                        <h2 className='text-4xl text-white font-semibold ml-8'>{music.name}</h2>
                    </div>
                    <div className='z-50 w-full mt-4 px-10 flex flex-col items-center justify-center'>
                        <audio
                            ref={audioRef}
                            src={music.audio}
                            onTimeUpdate={handleTimeUpdate}
                            onLoadedMetadata={handleLoadedMetadata}
                        ></audio>
                        <input
                            type="range"
                            min="0"
                            max={music.duration}
                            value={currentTime}
                            onChange={handleSeek}
                            className='w-full mt-4'
                        />
                        <button
                            onClick={togglePlayPause}
                            className='mt-4 px-4 py-2 bg-white text-black rounded-lg shadow-md'>
                            {isPlaying ? 'Pause' : 'Play'}
                        </button>
                    </div>
                </div>

            ) :
                (
                    <h1>Musica não encontrada</h1>
                )}


        </div>
    )
}

export default PlayerSong