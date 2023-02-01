import { Outlet } from 'react-router-dom';
import Menu from '../components/Menu/Menu';
import './SearchLayout.scss';

const SearchLayout = () => {
    return (
        <>
            <Menu />
            <Outlet />
        </>
    );
};

export default SearchLayout;
