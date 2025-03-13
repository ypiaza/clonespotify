import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { songsArray } from '../assets/database/songs';
import { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay, faCirclePause, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { artistArray } from '../assets/database/artists';


const PlayerSong = () => {
    const { name } = useParams();
    const music = songsArray.find((item) => item.name === name);
    const backPage = artistArray.filter((item) => music.artist === item.name)
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [time, setTime] = useState(0);
    const navigate = useNavigate();

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
                    {backPage ? (
                        backPage.map((item) => (
                            <button className='absolute top-0 z-50 flex items-center justify-center cursor-pointer text-white/50 duration-100 hover:text-white'
                                onClick={() => navigate(`/artistPage/${item.id}`)}>
                                <FontAwesomeIcon className='text-2xl my-10' icon={faChevronLeft} />
                                <h4 className='font-semibold ml-5'>Voltar</h4>
                            </button>
                        ))
                    ) : (
                        'Artista não encontrado'
                    )}
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
                            onClick={togglePlayPause}>
                            {isPlaying ? (
                                <FontAwesomeIcon className='text-5xl my-10 text-white/50 duration-100 hover:text-white cursor-pointer' icon={faCirclePause} />

                            ) : (
                                <FontAwesomeIcon className='text-5xl my-10 text-white/50 duration-100 hover:text-white cursor-pointer' icon={faCirclePlay} />
                            )}
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