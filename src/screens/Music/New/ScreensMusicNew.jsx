import { Link } from "react-router-dom";

const ScreensMusicNew = ({ array }) => {
    return (
        <>
            <Link to={array.slug}>
                <img
                    src={process.env.PUBLIC_URL + `/img/cover/${array.slug}`}
                    alt="cover"
                    className="ScreenMusicNew__img"
                />
                <h3>{array.album}</h3>
            </Link>
        </>
    );
};

export default ScreensMusicNew;
