import { artistArray } from '../assets/database/artists'
import { songsArray } from '../assets/database/songs'
import SingleItem from './SingleItem'
import SingleItemMusic from './SingleItemMusic'
import { Link } from 'react-router-dom'



const Main = () => {
  return (
    <div className=' bg-gradient-to-b from-[#1DB954]/60 to-zinc-900 rounded-2xl mx-6'>
      <div>
        <div className='flex items-end justify-between py-6 px-8'>
          <h2 className='text-2xl text-white font-semibold'>Artistas populares</h2>
          <Link className='text-white hover:underline' to="/artists">Mostrar tudo</Link>
        </div>

        <div className='grid grid-cols-5 items-center justify-center'>
          {artistArray.filter((_, index) => index < 5).map((artist, index) => (
            <SingleItem id={artist.id} key={index} index={index} image={artist.image} name={artist.name} />
          ))}
        </div>

        <div className='flex items-end justify-between py-6 px-8'>
          <h2 className='text-2xl text-white font-semibold'>Músicas populares</h2>
          <Link className='text-white hover:underline' to="/songs">Mostrar tudo</Link>
        </div>


        <div className='grid grid-cols-5 items-center justify-center'>
          {songsArray.filter((_, index) => index < 10).map((artist, index) => (
            <SingleItemMusic key={index} index={index} image={artist.image} name={artist.name} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Main