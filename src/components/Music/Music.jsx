import ContainerBig from '../../screens/Conteiner/Big/ContainerBig';
import ContainerMin from '../../screens/Conteiner/Min/ContainerMin';
import MusicHeader from '../../screens/Music/Header/MusicHeader';
import MusicSliderNew from './Slider/MusicSliderNew';
import './Music.css';

const Music = () => {
    return (
        <ContainerBig>
            <div className="music">
                <MusicHeader />
                <ContainerMin>
                    <MusicSliderNew />
                </ContainerMin>
            </div>
        </ContainerBig>
    );
};

export default Music;
