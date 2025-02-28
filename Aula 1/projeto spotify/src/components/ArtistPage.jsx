import { useParams } from 'react-router-dom';
import { artistArray } from '../assets/database/artists';
import { songsArray } from '../assets/database/songs';

const ArtistPage = () => {
    const { id } = useParams();
    const artist = artistArray.find((item) => item.id === parseInt(id));
    const songs = songsArray.filter((item) => item.artist === artist.name);


    return (
        <div className=' flex flex-col items-center overflow-hidden h-full bg-gradient-to-b from-[#1DB954]/60 to-zinc-900 rounded-2xl'>
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

                    <div className='w-full'>
                        <div className=' w-full p-4'>
                            <h2 className='text-white text-3xl font-bold'>Populares</h2>
                        </div>
                        {songs ? (
                            songs.map((item, index) => (
                                <div className='flex items-center w-full p-4 hover:bg-white/10'>

                                    <div>
                                        <h2>{index + 1}</h2>
                                    </div>
                                    <div className='h-10 w-10 rounded bg-cover bg-no-repeat bg-center'
                                         style={{
                                            backgroundImage: `url(${item.image})`
                                         }}
                                    ></div>
                                    <div className='flex text-white px-2.5'>

                                        <h2 className="text-white font-semibold">{item.name}</h2>

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
