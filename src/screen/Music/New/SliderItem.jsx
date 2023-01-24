import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import './SliderItem.css';

const SliderItem = ({ className, nameSlider, settings, array }) => {
    
    return (
        <div className={`SliderItem ${className}`}>
            <h2 className='SliderItem__title'>{nameSlider}</h2>
            <Slider {...settings}>
                {array.map((item) => {
                    return (
                        <div key={item.id}>
                            <Link to={item.slug}>
                                <img
                                    className="SliderItem__img"
                                    src={
                                        process.env.PUBLIC_URL +
                                        `/img/music/cover/${item.title}/${item.cover}`
                                    }
                                    alt="Cover"
                                    srcset=""
                                />
                            </Link>
                            <p className='SliderItem__subtitle'>{item.album}</p>
                        </div>
                    );
                })}
            </Slider>
        </div>
    );
};

export default SliderItem;
