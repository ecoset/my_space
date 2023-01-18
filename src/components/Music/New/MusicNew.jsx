import music from '../../../data/music/music';
import SimpleSlider from '../../UI/Slider/SimpleSlider/SimpleSlider';
import '../../UI/Slider/SimpleSlider/SimpleSlider.css';

const MusicNew = ({ settingsSlider }) => {
    return (
        <SimpleSlider
            name={'Новые Релизы'}
            settings={{
                ...settingsSlider
            }}
            array={music}
            className={'SimpleSlider'}
            dir="/img/"
        />
    );
};

export default MusicNew;
