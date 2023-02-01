import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <Link className="Logo__link" to="/">
            <img className="Logo__img"
                src={process.env.PUBLIC_URL + '/img/music/logo/music-logo.svg'}
                alt=""
            />
        </Link>
    );
};

export default Logo;
