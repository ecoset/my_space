import ContainerBig from '../../screen/Containers/ContainerBig';
import SliderItem from '../../screen/Music/New/SliderItem';
import music from '../../screen/Music/data/music';
import './Music.css';

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
                <section>
                    <SliderItem
                        className={"Music__slider-new"}
                        nameSlider={'Новые Релизы'}
                        settings={settings}
                        array={music}
                    />
                </section>
            </main>
        </ContainerBig>
    );
};

export default Music;
