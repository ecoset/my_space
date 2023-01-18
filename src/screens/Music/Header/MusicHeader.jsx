// import logosvg from ''
// import searchsvg from '../img/search__button.svg';

const MusicHeader = () => {
    return (
        <header className="music__header">
            <a href="/#" className="music__logo-link">
                <img src={process.env.PUBLIC_URL + '/img/music__logo-img.svg'} alt="logo" className="music__logo-img" />
            </a>
            <div className="music__search">
                <input type="text" className="music__search-input" />
                <button className="music__search-button">
                    <img src={process.env.PUBLIC_URL + '/img/search__button.svg'} alt="" srcset="" />
                </button>
            </div>
        </header>
    );
};

export default MusicHeader;
