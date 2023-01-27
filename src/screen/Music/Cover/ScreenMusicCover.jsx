import { Link } from 'react-router-dom';
import './ScreenMusicCover.scss';

const ScreenMusicCover = (props) => {
    return (
        <>
            <Link to={props.slug}>
                <img
                    className={`ScreenMusicCover__img ${props.classImg}`}
                    src={
                        process.env.PUBLIC_URL +
                        `/img/music/cover/${props.title}/${props.cover}`
                    }
                    alt="Cover"
                    srcset=""
                />
            </Link>
            <p className={`ScreenMusicCover__subtitle ${props.classText}`}>
                {props.album}
            </p>
        </>
    );
};

export default ScreenMusicCover;
