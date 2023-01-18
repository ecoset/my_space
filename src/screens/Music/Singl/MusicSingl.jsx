import '../Music.css';
import music from '../../../data/music/music';
import { useParams } from 'react-router-dom';
import queryString from 'query-string';
import ContainerMin from '../../Conteiner/Min/ContainerMin';

const MusicSingle = () => {
    const param = useParams();
    const query = queryString.parse(param);

    const singl = music.find((find) => find.slug === query.slug);

    return (
        <ContainerMin>
            <div className="music__singl">
                <div className="music__cover-block">
                    <img
                        style={{ width: '248px', height: '248px' }}
                        src={singl}
                        alt=""
                        className="music__cover"
                    />
                </div>
                <div className="music__player"></div>
            </div>
        </ContainerMin>
    );
};

export default MusicSingle;
