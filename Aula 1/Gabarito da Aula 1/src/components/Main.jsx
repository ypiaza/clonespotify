import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

const Main = () => {
  const [btnArtistHover, setBtnArtistHover] = useState(false)


  return (
    <div className='bg-gradient-to-b from-[#1DB954]/60 to-zinc-900 h-[100vh] rounded-2xl mx-6'>
      <div>
        <div className='flex items-end justify-between py-6 px-8'>
          <h2 className='text-2xl text-white font-semibold'>Artistas populares</h2>
          <a className='text-md text-white hover:underline' href="/">Mostrar tudo</a>
        </div>

        <div className='flex items-center justify-center flex-col hover:bg-gradient-to-b hover:from-[#1DB954]/30 hover:to-[#189243]/30 mx-4 rounded-xl p-6 duration-300 hover:shadow-2xl hover:shadow-[#1DB954]/10'
             onMouseOver={() => setBtnArtistHover(true)}
             onMouseOut={() => setBtnArtistHover(false)}>

          <div className='overflow-hidden relative'>
            <div className='w-[140px] h-[140px] overflow-hidden flex items-center justify-center rounded-full'>
              <img className='rounded-full' src="https://i.scdn.co/image/ab676161000051744dcd8a3bff84cd7703892cf4" alt="Imagem do Artista" />
            </div>

            <FontAwesomeIcon className={`text-[#1DB954] text-5xl absolute right-0 duration-200 ${btnArtistHover ? '-translate-y-14' : ''}`} icon={faCirclePlay} />
          </div>

          <p className='text-white font-semibold'>Henrique & Juliano</p>
          <p className='text-white'>Artista</p>
        </div>
      </div>
    </div>
  )
}

export default Main