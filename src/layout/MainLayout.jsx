import { Outlet } from 'react-router-dom';
import Menu from '../components/Menu/Menu';
import ContainerBig from '../screen/Containers/ContainerBig';

const MainLayout = () => {
    return (
        <ContainerBig>
            <div className="MainLayout">
                <Menu />
                <Outlet />
            </div>
        </ContainerBig>
    );
};

export default MainLayout;
