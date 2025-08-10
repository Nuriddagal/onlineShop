import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Pagination } from 'swiper/modules';

import type { FC } from 'react';

type Props = {
    images: string[];
    title: string;
    swiperName: string;
    sliderName: string;
    imgName: string;
};
export const DashboardSwiper: FC<Props> = ({ images, title, sliderName, swiperName, imgName }) => {
    return (
        <>
            <Swiper
                className={swiperName}
                modules={[Navigation, Pagination]}
                spaceBetween={20}
                slidesPerView={1}
                navigation
                pagination={{
                    type: 'fraction',
                }}
                loop={true}
            >
                {images.map((src, id) => (
                    <SwiperSlide key={id} className={sliderName}>
                        <img src={src} alt={title} className={imgName} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};
