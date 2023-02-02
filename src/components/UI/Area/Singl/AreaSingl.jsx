const AreaSingl = ({ className, arr }) => {
    return (
        <div className={`AreaSingl ${className}`}>
            <div className={`AreaSingl__img-block} ${className}__img-block`}>
                <div className={`AreaSingl__nav ${className}__nav`}></div>
                <img
                    src={arr}
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
