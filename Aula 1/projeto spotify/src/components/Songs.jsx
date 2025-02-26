import React from 'react'
import SingleItemMusic from './SingleItemMusic'
import { Link } from 'react-router-dom'
import { songsArray } from '../assets/database/songs'

const Songs = () => {
  return (
    <div className=' bg-gradient-to-b from-[#1DB954]/60 to-zinc-900 rounded-2xl mx-6'>
      <div className='flex items-end justify-between py-6 px-8'>
        <h2 className='text-2xl text-white font-semibold'>Artistas populares</h2>
        <Link to="/" className='text-white hover:underline'>Voltar</Link>
      </div>

      <div className='grid grid-cols-5 items-center justify-center'>
        {songsArray.map((artist, index) => (
          <SingleItemMusic key={index} index={index} image={artist.image} name={artist.name} />
        ))}
      </div>
    </div>
  )
}

export default Songs