import AreaSingl from '../../UI/Area/Singl/AreaSingl';
import music from '../../../screen/Music/data/music';

const MusicSingl = () => {
    return (
        <>
            <AreaSingl className={`MusicSingl`} arr={music} />
        </>
    );
};

export default MusicSingl;
