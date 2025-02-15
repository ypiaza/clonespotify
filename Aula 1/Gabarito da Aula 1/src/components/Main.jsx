import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { artistArray } from '../assets/database/artists'

const Main = () => {
  const [btnArtistHover, setBtnArtistHover] = useState(false)


  return (
    <div className='bg-gradient-to-b from-[#1DB954]/60 to-zinc-900 h-[100vh] rounded-2xl mx-6'>
      <div>
        <div className='flex items-end justify-between py-6 px-8'>
          <h2 className='text-2xl text-white font-semibold'>Artistas populares</h2>
          <a className='text-md text-white hover:underline' href="/">Mostrar tudo</a>
        </div>

        <div className='grid grid-cols-5 items-center justify-center'>
          {artistArray.map((artist) => (
            <div className='grid grid-cols-5 items-center justify-center hover:bg-gradient-to-b hover:from-[#1DB954]/30 hover:to-[#189243]/30 mx-4 rounded-xl p-6 duration-300 hover:shadow-2xl hover:shadow-[#1DB954]/10'
              onMouseOver={() => setBtnArtistHover(true)}
              onMouseOut={() => setBtnArtistHover(false)}>

              <div className='flex items-center justify-center flex-col'>
                <div className='overflow-hidden relative'>
                  <div className='w-[140px] h-[140px] overflow-hidden flex items-center justify-center rounded-full'>
                    <img className='rounded-full' src={artist.image} alt="Imagem do Artista" />
                  </div>

                  <FontAwesomeIcon className={`text-[#1DB954] text-5xl absolute right-0 duration-200 ${btnArtistHover ? '-translate-y-14' : ''}`} icon={faCirclePlay} />
                </div>

                <p className='text-white font-semibold'>{artist.name}</p>
                <p className='text-white'>Artista</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Main