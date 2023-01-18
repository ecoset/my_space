import { useParams } from "react-router-dom";
import music from "../../../data/music/music";


const MusicSingle = () => {
    const params = useParams();
    const musicItem = music.find(item => item.slug === params.slug)

    return (
        <div className="MusicSingle">
            <div className="MusicSing__cover-block">
                <h1>{musicItem.title}</h1>
                <h3>{musicItem.album}</h3>
                <img src={process.env.PUBLIC_URL + `/img/${musicItem.cover}`} alt="" className="MusicSingl__cover" />
            </div>
            <div className="MusicSingl__player-block"></div>
        </div>
    );
};

export default MusicSingle;
