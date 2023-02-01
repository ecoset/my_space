import { NavLink } from 'react-router-dom';
import ContainerBig from '../../screen/Containers/ContainerBig';
import Logo from '../UI/logo/Logo';
import SearchBar from '../UI/Search/Bar/SearchBar';
import './Menu.scss';

const Menu = () => {
    return (
        <ContainerBig>
            <header className="header__menu">
                <Logo />
                <SearchBar />
                <nav className="Menu">
                    <ul className="Menu__list">
                        <li className="Menu__item">
                            <NavLink className="Menu__link" to="." end>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="Menu__link" to="music">
                                Music
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </ContainerBig>
    );
};

export default Menu;
