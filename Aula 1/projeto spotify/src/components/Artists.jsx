import React from 'react'
import SingleItem from './SingleItem'
import { artistArray } from '../assets/database/artists'
import { Link } from 'react-router-dom'

const Artists = () => {
  return (
    <div className=' bg-gradient-to-b from-[#1DB954]/60 to-zinc-900 rounded-2xl mx-6'>
      <div className='flex items-end justify-between py-6 px-8'>
        <h2 className='text-2xl text-white font-semibold'>Artistas populares</h2>
        <Link to="/" className='text-white hover:underline'>Voltar</Link>
      </div>

      <div className='grid grid-cols-5 items-center justify-center'>
        {artistArray.map((artist, index) => (
          <SingleItem key={index} index={index} image={artist.image} name={artist.name} />
        ))}
      </div>
    </div>
  )
}

export default Artists