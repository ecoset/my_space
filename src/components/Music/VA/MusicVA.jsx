import Area from '../../UI/Area/Area';
import music from '../../../screen/Music/data/music';
import ContainerMin from '../../../screen/Containers/ContainerMin';

const MusicVA = () => {
    return (
        <div className="MusicVA">
            <ContainerMin>
                <Area
                    name={'Сборники'}
                    array={music}
                    className={'MusicVA__area'}
                />
            </ContainerMin>
        </div>
    );
};

export default MusicVA;
