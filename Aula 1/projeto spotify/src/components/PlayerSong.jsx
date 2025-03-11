import React from 'react'
import { useParams } from 'react-router-dom'
import { songsArray } from '../assets/database/songs';

const PlayerSong = () => {
    const { name } = useParams();
    const findMusic = songsArray.find((item) => item.name === parseInt(name));
    const music = songsArray.filter((item) => item.name === findMusic)

    return (
        <div className=' flex justify-center items-center overflow-hidden h-screen bg-gradient-to-b from-[#1DB954]/30 to-zinc-900 rounded-2xl'>
            {music ? (
                    <div className='flex items-center justify-center h-full w-full'>
                        <h2>{music.name}</h2>
                    </div>
                
            ) :
                (
                    <h1>Musica não encontrada</h1>
                )}


        </div>
    )
}

export default PlayerSong