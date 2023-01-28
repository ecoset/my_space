import ScreenMusicCover from '../../../screen/Music/Cover/ScreenMusicCover';
import './Area.scss';

const Area = ({ name, array, className }) => {
    return (
        <>
            <h2 className={`Area-title ${className}-title`}>{name}</h2>
            <div className={`Area ${className}`}>
                {array.map((item) => {
                    return (
                        <div
                            key={item.id}
                            className={`Area__item ${className}__item`}
                        >
                            <ScreenMusicCover
                                slug={item?.slug}
                                title={item?.title}
                                cover={item?.cover}
                                album={item?.album}
                                classImg={`Area__img ${className}__img`}
                                classText={`Area__subtitle ${className}__subtitle`}
                            />
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default Area;
