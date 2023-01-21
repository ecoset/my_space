import SimpleSlider from '../../UI/Slider/SimpleSlider/SimpleSlider';
import ScreensMusicList from '../../../screens/Music/List/ScreensMusicList';

const MusicSliderNew = () => {
    return (
        <>
            <h3>Новые Релизы</h3>
            <SimpleSlider>
                <ScreensMusicList />
            </SimpleSlider>
        </>
    );
};

export default MusicSliderNew;
