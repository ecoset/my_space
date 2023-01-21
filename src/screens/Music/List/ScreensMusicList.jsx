import music from '../../../data/music/music';
import ScreensMusicNew from '../New/ScreensMusicNew';

const ScreensMusicList = () => {
    return (
        <div>
            {music.map(array => {
                return (
                    <ScreensMusicNew array={array} />
                )
            })}
        </div>
    );
};

export default ScreensMusicList;
