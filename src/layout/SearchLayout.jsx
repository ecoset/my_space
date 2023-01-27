import { Outlet } from 'react-router-dom';
import SearchBar from '../components/UI/Search/Bar/SearchBar';

const SearchLayout = () => {
    return (
        <>
            <SearchBar
                className="Music__header"
                linkLogo={'music/logo/music-logo.svg'}
            />

            <Outlet />
        </>
    );
};

export default SearchLayout;
