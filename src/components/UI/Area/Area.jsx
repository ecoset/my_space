import ScreenMusicCover from '../../../screen/Music/Cover/ScreenMusicCover';
import './Area.scss'

const Area = ({ array }) => {
    return (
        <div className="Area">
            {array.map((item) => {
                return (
                    <div key={item.id} className="Area__item">
                        <ScreenMusicCover
                            slug={item?.slug}
                            title={item?.title}
                            cover={item?.cover}
                            album={item?.album}
                            classImg="Area__img"
                            classText="Area__subtitle"
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default Area;
