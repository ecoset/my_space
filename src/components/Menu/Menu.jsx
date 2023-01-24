import { NavLink } from 'react-router-dom';
import './Menu.css'

const Menu = () => {
    return (
        <nav className="Menu">
            <NavLink to="/" end>
                Home
            </NavLink>
            <NavLink to="music">Music</NavLink>
        </nav>
    );
};

export default Menu;
