import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Autoplay, Pagination, Navigation, EffectCoverflow } from 'swiper/modules';

function Slider() {
    // 슬라이더갯수 설정
    const slideCount = 5;

    return (
        <section style={{ width: '80vw', position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                centeredSlides={true}
                loop={true}
                navigation={true}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            >
                {Array.from({ length: slideCount }, (_, i) => (
                    <SwiperSlide key={i}>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: '300px',
                                fontSize: '24px',
                                backgroundColor: 'yellowgreen',
                            }}
                        >
                            {i + 1}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}

export default Slider;
