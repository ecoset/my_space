import { useParams } from 'react-router-dom';
import music from '../../../data/music/music';
import ContainerBig from '../../../screens/Conteiner/Big/ContainerBig';
import './MusicSingle.css';

const MusicSingle = () => {
    const params = useParams();
    const musicItem = music.find((item) => item.slug === params.slug);

    return (
        <ContainerBig>
            <div className="MusicSingle">
                <div className="MusicSing__cover-block">
                    <h1>{musicItem.title}</h1>
                    <img
                        src={process.env.PUBLIC_URL + `/img/${musicItem.cover}`}
                        alt=""
                        className="MusicSingl__cover"
                    />
                </div>
                <div className="MusicSingle__playlist">
                    <h3>{musicItem.album}</h3>
                    <button className="MusicSingle__button-play">
                        Play Songs
                    </button>
                    <ul>
                        <li>Lorem ipsum dolor sit amet consectetur.</li>
                        <li>At repudiandae temporibus quas iste recusandae.</li>
                        <li>
                            Officiis voluptates temporibus quia eligendi itaque.
                        </li>
                        <li>Beatae mollitia suscipit sint? Magni, minus.</li>
                        <li>Enim dolores eum exercitationem impedit sint.</li>
                        <li>Nobis doloremque adipisci porro et incidunt.</li>
                    </ul>
                </div>
                <div className="MusicSingl__player-block"></div>
            </div>
        </ContainerBig>
    );
};

export default MusicSingle;
