import ContainerBig from '../../screen/Containers/ContainerBig';
import SliderInner from '../UI/Slider/SliderInner';
import music from '../../screen/Music/data/music';
import './Music.scss';
import SearchBar from '../UI/Search/Bar/SearchBar';

const Music = () => {
    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        variableWidth: true,
    };

    return (
        <ContainerBig>
            <main className="Music">
            <SearchBar className="Music__header" linkLogo={"music/logo/music-logo.svg"} />
                <section>
                    <SliderInner
                        className={"Music__slider--new"}
                        nameSlider={'Новые Релизы'}
                        settings={settings}
                        array={music}
                        link="music/new"
                    />
                </section>
                <section>
                    <SliderInner
                        className={"Music__slider--va"}
                        nameSlider={'Сборники'}
                        settings={settings}
                        array={music}
                        link="music/va"
                    />
                </section>
                <section>
                    <SliderInner
                        className={"Music__slider--artists"}
                        nameSlider={'Артисты'}
                        settings={settings}
                        array={music}
                        link="music/artists"
                    />
                </section>
            </main>
        </ContainerBig>
    );
};

export default Music;
