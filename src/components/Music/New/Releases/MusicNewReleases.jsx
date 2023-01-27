import Area from '../../../UI/Area/Area';
import music from '../../../../screen/Music/data/music';
import ContainerMin from '../../../../screen/Containers/ContainerMin';

const MusicNewReleases = () => {
    return (
        <div className="MusicNewReleases">
            <ContainerMin>
                <Area array={music} className={"MusicNewReleases__area"} />
            </ContainerMin>
        </div>
    );
};

export default MusicNewReleases;
