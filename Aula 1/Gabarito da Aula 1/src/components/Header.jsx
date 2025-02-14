import React from 'react'
import Logo from '../assets/logo/spotify-logo.png'

const Header = () => {
  return (
    <div className='flex items-center justify-between py-4 px-8'>
        <img src={Logo} alt="Logo do Spotify" />
        <a className='text-xl font-semibold text-white' href="/">Spotify</a>
    </div>
  )
}

export default Header