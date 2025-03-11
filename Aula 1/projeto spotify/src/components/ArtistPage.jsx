import { useNavigate, useParams } from 'react-router-dom';
import { artistArray } from '../assets/database/artists';
import { songsArray } from '../assets/database/songs';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons';


const ArtistPage = () => {
    const { id } = useParams();
    const artist = artistArray.find((item) => item.id === parseInt(id));
    const songs = songsArray.filter((item) => item.artist === artist.name);

    const [hoverSong, setHoverSong] = useState(null)

    const navigate = useNavigate();


    return (
        <div className=' flex flex-col items-center overflow-hidden h-full bg-gradient-to-b from-[#1DB954]/30 to-zinc-900 rounded-2xl'>
            {artist ? (
                <div className='w-full h-full grid grid-cols-1'>
                    <div>
                        <div className='flex relative items-start w-full bg-center bg-cover bg-no-repeat shadow-2xl'
                            style={{
                                backgroundImage: `url(${artist.banner})`,
                            }}
                        >
                            <div className="absolute inset-0 bg-black/40"></div>

                            <div className='ml-10 flex h-[400px] relative w-full items-center '>
                                <h2 className="text-9xl font-bold text-white">{artist.name}</h2>
                            </div>
                        </div>
                    </div>

                    <div className='w-full px-4'>
                        <div className=' w-full p-4 mt-10'>
                            <h2 className='text-white text-3xl font-bold'>Populares</h2>
                        </div>
                        {songs ? (
                            songs.map((item, index) => (
                                <div key={index} className='flex items-center justify-between w-full p-4 hover:bg-white/10 rounded'
                                     onMouseOver={() => setHoverSong(index)}
                                     onMouseOut={() => setHoverSong(null)}
                                     onClick={() => navigate(`/playerSong/${item.name}`)}
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
                            ))
                        ) : (
                            <p className="text-gray-400">Músicas não encontradas!</p>
                        )}

                    </div>
                </div>
            ) : (
                <p className="text-red-500">Artista não encontrado.</p>
            )}
        </div>
    );
};

export default ArtistPage;
