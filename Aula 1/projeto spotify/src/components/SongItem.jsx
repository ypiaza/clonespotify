import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const SongItem = () => {
    return (
        <div key={index} className='flex items-center justify-between w-full p-4 hover:bg-white/10 rounded'
            onMouseOver={() => setHoverSong(index)}
            onMouseOut={() => setHoverSong(null)}
        >
            <div className='flex items-center'>
                <div className={`h-10 w-10 text-white/70 font-semibold flex items-center `}>
                    {hoverSong === index ? <FontAwesomeIcon className='text-white' icon={faPlay} /> : <h2>{index + 1}</h2>}
                </div>
                <div className='h-10 w-10 rounded bg-cover bg-no-repeat bg-center'
                    style={{
                        backgroundImage: `url(${item.image})`
                    }}
                ></div>
                <div className='flex text-white/70 px-2'>
                    <h2 className="text-white font-semibold">{item.name}</h2>
                </div>
            </div>
            <div className='h-10 w-10 text-white/70 font-semibold flex items-center'>
                <h2>{item.duration}</h2>
            </div>
        </div>
    )
}

export default SongItem