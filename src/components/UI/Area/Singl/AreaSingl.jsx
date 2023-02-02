import { useParams } from "react-router-dom";

const AreaSingl = ({ className, arr }) => {
    const param = useParams();
    const music = arr.find(item => item.slug === param.slug)

    return (
        <div className={`AreaSingl ${className}`}>
            <div className={`AreaSingl__img-block} ${className}__img-block`}>
                <div className={`AreaSingl__nav ${className}__nav`}></div>
                <img
                    src={process.env.PUBLIC_URL + `/audio/music/${music.title}/${music.cover}`}
                    alt=""
                    className={`AreaSingl__img ${className}__img`}
                />
            </div>
            <div
                className={`AreaSingl__player-block ${className}__player-block`}
            ></div>
        </div>
    );
};

export default AreaSingl;
