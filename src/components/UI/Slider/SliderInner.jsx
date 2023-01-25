import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import './SliderInner.scss';

const SliderInner = ({ className, nameSlider, settings, array }) => {
    
    return (
        <div className={`SliderInner ${className}`}>
            <h2 className='SliderInner__title'>{nameSlider}</h2>
            <Slider {...settings}>
                {array.map((item) => {
                    return (
                        <div key={item.id}>
                            <Link to={item.slug}>
                                <img
                                    className="SliderInner__img"
                                    src={
                                        process.env.PUBLIC_URL +
                                        `/img/music/cover/${item.title}/${item.cover}`
                                    }
                                    alt="Cover"
                                    srcset=""
                                />
                            </Link>
                            <p className='SliderInner__subtitle'>{item.album}</p>
                        </div>
                    );
                })}
            </Slider>
        </div>
    );
};

export default SliderInner;
