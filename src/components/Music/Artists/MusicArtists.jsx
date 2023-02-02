import Area from '../../UI/Area/Area';
import music from '../../../screen/Music/data/music';
import ContainerMin from '../../../screen/Containers/ContainerMin';

const MusicArtists = () => {
    return (
        <div className="MusicArtists">
            <ContainerMin>
                <Area
                    name={'Артисты'}
                    array={music}
                    className={'MusicArtists__area'}
                />
            </ContainerMin>
        </div>
    );
};

export default MusicArtists;
