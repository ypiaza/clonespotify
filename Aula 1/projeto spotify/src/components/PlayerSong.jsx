import React from 'react'
import { useParams } from 'react-router-dom'
import { songsArray } from '../assets/database/songs';

const PlayerSong = () => {
    const { name } = useParams();
    const music = songsArray.find((item) => item.name === name);

    return (
        <div className=' flex justify-center items-center overflow-hidden h-screen bg-gradient-to-b from-[#1DB954]/30 to-zinc-900 rounded-2xl'>
            {music ? (
                    <div className='flex items-center flex-col justify-center h-full w-full'>
                        <img src={music.image} alt="Album image" />
                        <h2 className='text-xl text-white font-semibold'>{music.name}</h2>
                    </div>
                
            ) :
                (
                    <h1>Musica não encontrada</h1>
                )}


        </div>
    )
}

export default PlayerSong