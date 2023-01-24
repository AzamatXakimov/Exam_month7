import { HeroContainer, HeroSection, HeroTitle, HeroTitleBox } from "./Hero.style"
import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector } from "react-redux"
import "swiper/css";
import "swiper/css/pagination";
import "./Swiper.css";
import { Pagination } from "swiper";
import { language } from "../../Lang/Lang";
// import { useTranslation } from 'react-i18next';
export const Hero = () => {
    // const {t} = useTranslation()
    const {lang} = useSelector((state) => state.lang)
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return `<span class="${className}"></span>`;
        },
    };
    return <>
        <HeroSection>
            <HeroContainer className="container">
                <Swiper
                    pagination={pagination}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <HeroTitleBox>
                            <HeroTitle>
                                {/* {t("hero.title")} */}
                                {language[lang].hero.title}
                            </HeroTitle>
                        </HeroTitleBox>
                    </SwiperSlide>
                    <SwiperSlide>
                        <HeroTitleBox>
                            <HeroTitle>
                                {/* {t("hero.title")} */}
                                {language[lang].hero.title}
                            </HeroTitle>
                        </HeroTitleBox>
                    </SwiperSlide>
                    <SwiperSlide>
                        <HeroTitleBox>
                            <HeroTitle>
                                {/* {t("hero.title")} */}
                                {language[lang].hero.title}
                            </HeroTitle>
                        </HeroTitleBox>
                    </SwiperSlide>
                </Swiper>
            </HeroContainer>
        </HeroSection>
    </>
}