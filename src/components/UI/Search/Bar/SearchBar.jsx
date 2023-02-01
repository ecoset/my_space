import './SearchBar.scss'

const SearchBar = () => {
    return (
        <form className="SearchBar" action="#" method="get">
            <input
                className="SearchBar__input"
                type="text"
                name="search"
                placeholder="Search"
            />
            <button className="SearchBar__button" type="submit">
                <img src={process.env.PUBLIC_URL + '/img/buttons/button_search.svg'} alt="" />
            </button>
        </form>
    );
};

export default SearchBar;
