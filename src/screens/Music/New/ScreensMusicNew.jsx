import { Link } from 'react-bootstrap/lib/Navbar';

const ScreensMusicNew = ({ array }) => {
    return (
        <div className="ScreensMusicNew">
            <Link to={array.slug}>
                <img
                    src={process.env.PUBLIC_URL + `/img/cover/${array.slug}`}
                    alt="cover"
                    className="ScreenMusicNew__img"
                />
                <h3>{array.title}</h3>
            </Link>
        </div>
    );
};

export default ScreensMusicNew;
