import '../Music.css'
import music from '../../../data/music/music.js'

const MusicList = () => {
    
    return (
        <div className="music__list">
            {music.map((music) => {
                return (
                    <div key={music.id} className="music__item">
                        <h3 className="music__title">{music.title}</h3>
                        <b>"{music.album}"</b>
                        <p> {music.year}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default MusicList;
