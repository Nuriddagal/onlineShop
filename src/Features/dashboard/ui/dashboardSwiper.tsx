import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Swiper, SwiperSlide } from 'swiper/react';
import type { Product } from './Types';
import { Navigation, Pagination } from 'swiper/modules';

export function DashboardSwiper({ images, title }: Pick<Product, 'images' | 'title'>) {
    return (
        <>
            <Swiper
                className="dashboard__swiper"
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
                    <SwiperSlide key={id} className="slide">
                        <img src={src} alt={title} className="dashboard__image" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
