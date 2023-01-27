import ContainerBig from '../../screen/Containers/ContainerBig';
import SliderInner from '../UI/Slider/SliderInner';
import music from '../../screen/Music/data/music';
import ContainerMin from '../../screen/Containers/ContainerMin';
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
                <ContainerMin>
                    <section>
                        <SliderInner
                            className={'Music__slider--new'}
                            nameSlider={'Новые Релизы'}
                            settings={settings}
                            array={music}
                            link="new"
                        />
                    </section>
                </ContainerMin>
                <ContainerMin>
                    <section>
                        <SliderInner
                            className={'Music__slider--va'}
                            nameSlider={'Сборники'}
                            settings={settings}
                            array={music}
                            link="va"
                        />
                    </section>
                </ContainerMin>
                <ContainerMin>
                    <section>
                        <SliderInner
                            className={'Music__slider--artists'}
                            nameSlider={'Артисты'}
                            settings={settings}
                            array={music}
                            link="artists"
                        />
                    </section>
                </ContainerMin>
            </main>
        </ContainerBig>
    );
};

export default Music;
