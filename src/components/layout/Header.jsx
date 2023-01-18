import { Outlet } from "react-router-dom";
import Menu from "../../screens/Menu/Menu";

const Header = () => {
    return (
        <header className='header'>
            <Menu />
            <Outlet />
        </header>
    );
};

export default Header;
