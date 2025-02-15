import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

const SingleItem = () => {
    const [btnArtistHover, setBtnArtistHover] = useState(null)
  return (
    <div className='flex items-center justify-center hover:bg-gradient-to-b hover:from-[#1DB954]/30 hover:to-[#189243]/30 mx-4 rounded-xl p-6 duration-300 hover:shadow-2xl hover:shadow-[#1DB954]/10'
              onMouseOver={() => setBtnArtistHover(index)}
              onMouseOut={() => setBtnArtistHover(null)}>

              <div className='flex items-center justify-center flex-col'>
                <div className='overflow-hidden relative'>
                  <div className='w-[140px] h-[140px] overflow-hidden flex items-center justify-center rounded-full'>
                    <img className='rounded-full' src={artist.image} alt="Imagem do Artista" />
                  </div>

                  <FontAwesomeIcon className={`text-[#1DB954] text-5xl absolute right-0 duration-200 ${btnArtistHover === index ? '-translate-y-14' : ''}`} icon={faCirclePlay} />
                </div>

                <p className='text-white font-semibold'>{artist.name}</p>
                <p className='text-white'>Artista</p>
              </div>
            </div>
  )
}

export default SingleItem