import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './SimpleSlider.css';

function SimpleSlider({ name, settings, array, className, dir }) {
    const setSettings = {
        ...settings,
    };
    
    return (
        <div className='slide'>
            <h3
                style={{
                    textAlign: 'left',
                    marginBottom: '16px',
                    marginTop: '32px',
                }}
            >
                {name}
            </h3>
            <Slider {...setSettings} className={className}>
                {array.map((slide) => {
                    return (
                        <div key={slide.id}>
                            <Link to={slide.slug}>
                                <img
                                    src={
                                        process.env.PUBLIC_URL +
                                        `${dir}${slide.cover}`
                                    }
                                    alt=""
                                />
                            </Link>
                                <p className="slide__text" style={{ marginTop: '' }}>
                                    {slide.album}
                                </p>
                        </div>
                    );
                })}
            </Slider>
        </div>
    );
}

export default SimpleSlider;
