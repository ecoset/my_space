import music from '../../../data/music/music';
import ScreensMusicNew from '../New/ScreensMusicNew';

const ScreensMusicList = () => {
    return (
        <>
            {music.map(array => {
                return (
                    <ScreensMusicNew array={array} />
                )
            })}
        </>
    );
};

export default ScreensMusicList;
