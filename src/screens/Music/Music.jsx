import MusicArtists from '../../components/Music/Artists/MusicArtists';
import MusicNew from '../../components/Music/New/MusicNew';
import MusicVA from '../../components/Music/VariousArtists/MusicVA';
import ContainerBig from '../Conteiner/Big/ContainerBig';
import ContainerMin from '../Conteiner/Min/ContainerMin';
import MusicHeader from './Header/MusicHeader';
import './Music.css';

const Music = () => {
    const settingsSlider = {
        dots: false,
        arrows: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        adaptiveHeight: true,
        variableWidth: true,
    };
    return (
        <ContainerBig>
            <div className="music">
                <MusicHeader />
                <ContainerMin>
                    <MusicNew settingsSlider={settingsSlider} />
                    <MusicVA settingsSlider={settingsSlider} />
                    <MusicArtists settingsSlider={settingsSlider} />
                </ContainerMin>
            </div>
        </ContainerBig>
    );
};

export default Music;
