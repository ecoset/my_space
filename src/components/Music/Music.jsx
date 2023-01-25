import ContainerBig from '../../screen/Containers/ContainerBig';
import SliderInner from '../UI/Slider/SliderInner';
import music from '../../screen/Music/data/music';
import './Music.scss';

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
                    <SliderInner
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
