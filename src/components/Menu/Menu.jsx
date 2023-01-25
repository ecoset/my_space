import { NavLink } from 'react-router-dom';
import './Menu.scss';

const Menu = () => {
    return (
        <nav className="Menu">
            <ul className='Menu__list'>
                <li>
                    <NavLink className="Menu__item" to="/" end>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink className="Menu__item" to="music">Music</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Menu;
