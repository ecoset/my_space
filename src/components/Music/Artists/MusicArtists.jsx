import music from '../../../data/music/music';
import SimpleSlider from '../../UI/Slider/SimpleSlider/SimpleSlider';
import '../../UI/Slider/SimpleSlider/SimpleSlider.css';

const MusicArtists = ({ settingsSlider }) => {
    return (
        <SimpleSlider
            name={'Артисты'}
            settings={{
                ...settingsSlider
            }}
            array={music}
            className={'SimpleSlider SimpleSlider--border'}
            dir="/img/"
        />
    );
};

export default MusicArtists;
