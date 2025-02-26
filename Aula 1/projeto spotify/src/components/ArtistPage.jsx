import { useParams } from 'react-router-dom';
import { artistArray } from '../assets/database/artists';

const ArtistPage = () => {
    const { id } = useParams();
    const artist = artistArray.find((item) => item.id === parseInt(id));

    return (
        <div className=' flex items-start p-14 flex-col h-screen bg-gradient-to-b from-[#1DB954]/60 to-zinc-900 rounded-2xl mx-6'>
            {artist ? (
                <div className='flex items-center justify-center w-full bg-center bg-cover bg-no-repeat'
                    style={{
                        backgroundImage: `url(${artist.banner})`,
                    }}
                >
                    <div className="h-[200px] w-[200px] rounded-full mr-10 bg-center bg-no-repeat bg-cover"
                        style={{
                            backgroundImage: `url(${artist.image})`,
                        }}
                    >
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-white">{artist.name}</h2>
                    </div>
                </div>
            ) : (
                <p className="text-red-500">Artista não encontrado.</p>
            )}
        </div>
    );
};

export default ArtistPage;
