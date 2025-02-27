import { useParams } from 'react-router-dom';
import { artistArray } from '../assets/database/artists';
import { songsArray } from '../assets/database/songs';

const ArtistPage = () => {
    const { id } = useParams();
    const artist = artistArray.find((item) => item.id === parseInt(id));
    const songs = songsArray.filter((item) => item.id === parseInt(id));

    return (
        <div className=' flex flex-col items-center overflow-hidden h-screen bg-gradient-to-b from-[#1DB954]/60 to-zinc-900 rounded-2xl'>
            {artist ? (
                <div className='w-full h-full grid grid-cols-1 grid-rows-2'>
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

                    <div className='w-full h-full '>
                        {songs.length > 0 ? (
                            songs.map((song) => (
                                <h2 key={song.id} className="text-white">{console.log(song.name)}</h2>
                            ))
                        ) : (
                            <p>Musicas não encontradas!</p>
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
