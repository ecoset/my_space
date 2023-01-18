import SimpleSlider from '../../UI/Slider/SimpleSlider/SimpleSlider';
import music from '../../../data/music/music';

const MusicVA = ({ settingsSlider }) => {
    return (
        <SimpleSlider
            name={'Сборники'}
            settings={{
                ...settingsSlider,
            }}
            array={music}
            className={'SimpleSlider'}
            dir="/img/"
        />
    );
};

export default MusicVA;
