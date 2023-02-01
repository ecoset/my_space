import { Link, Outlet } from 'react-router-dom';
import Menu from '../components/Menu/Menu';
import ContainerBig from '../screen/Containers/ContainerBig';

const MainLayout = () => {
    return (
        <ContainerBig>
            <div className="MainLayout">
                <Link to="." className="SearchBar__link">
                    <img
                        src={process.env.PUBLIC_URL + `/img/${linkLogo}`}
                        alt=""
                        className="SearchBar__logo"
                    />
                </Link>
                <Menu />
                <Outlet />
            </div>
        </ContainerBig>
    );
};

export default MainLayout;
