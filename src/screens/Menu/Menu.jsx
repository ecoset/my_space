import { NavLink } from 'react-router-dom';
import ContainerBig from '../Conteiner/Big/ContainerBig';

const Menu = () => {
    return (
        <ContainerBig>
            <nav className="nav">
                <div className="snake__item">
                    <a href="/#" className="snake__link">
                        <img
                            src={process.env.PUBLIC_URL + '/img/tree.svg'}
                            alt=""
                            style={{
                                'width': 'auto',
                                'height': '70px',
                                'fill': '#fff',
                            }}
                            srcset=""
                        />
                    </a>
                </div>
                <NavLink to="/" end>
                    Home
                </NavLink>
                <NavLink to="gallery">Gallery</NavLink>
                <NavLink to="music">Music</NavLink>
                <NavLink to="books">Books</NavLink>
                <NavLink to="favorites">Favorites</NavLink>
                <NavLink to="contacts">Contacts</NavLink>
            </nav>
        </ContainerBig>
    );
};

export default Menu;
