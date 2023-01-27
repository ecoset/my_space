import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import ScreenMusicCover from '../../../screen/Music/Cover/ScreenMusicCover';
import './SliderInner.scss';

const SliderInner = ({ className, nameSlider, settings, array, link }) => {
    return (
        <div className={`SliderInner ${className}`}>
            <Link to={link}>
                <h2 className="SliderInner__title">{nameSlider}</h2>
            </Link>
            <Slider {...settings}>
                {array?.map((item) => {
                    return (
                        <div key={item?.id}>
                            <ScreenMusicCover
                                slug={item?.slug}
                                title={item?.title}
                                cover={item?.cover}
                                album={item?.album}
                                classImg="SliderInner__img"
                                classText="SliderInner__subtitle"
                            />
                        </div>
                    );
                })}
            </Slider>
        </div>
    );
};

export default SliderInner;
