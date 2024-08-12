import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Autoplay, Pagination, Navigation, EffectCoverflow } from 'swiper/modules';

function Slider() {
    // 슬라이더갯수 설정
    const slideCount = 5;
    const swiperRef = useRef(null);

    return (
        <section
            id="slider-container"
            ref={swiperRef}
            style={{ width: '80%', position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}
        >
            <Swiper
                spaceBetween={100}
                slidesPerView={1}
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
                                height: '80vh',
                                // width: '30vw',
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
