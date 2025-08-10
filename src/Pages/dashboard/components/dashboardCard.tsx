import { useNavigate } from 'react-router';

import { Favorite, ShoppingCart } from '@mui/icons-material';
import { DashboardSwiper } from '../../../entities/dashboard/DashboardSwiper';
import type { CardState } from '@/Types';
import { DashboardInfo } from '@/entities/dashboard/DashboardInfo';
import { Review } from '../../../entities/review/Review';
import styles from '@/pages/dashboard/Dashboard.module.css';
import type { FC } from 'react';

export const DashboardCard: FC<CardState> = ({ product, addTo, setShowModal }) => {
    const navigate = useNavigate();

    const handleOrder = (): void => {
        addTo?.(product);
        navigate('/basket');
    };

    return (
        <>
            <div className={styles.card}>
                <DashboardSwiper
                    sliderName={styles.dashboardSlider}
                    swiperName={styles.dashboardSwiper}
                    imgName={styles.dashboardImage}
                    images={product.images}
                    title={product.title}
                />

                <button
                    className={styles.favoriteIcon}
                    onClick={() => (setShowModal ? setShowModal(true) : '')}
                >
                    <Favorite />
                </button>

                <DashboardInfo product={product} />
                <div className={styles.order}>
                    <p className={styles.price}>Price: ${product.price}</p>
                    <div className={styles.btnWrapper}>
                        <button className={styles.basketBtn} onClick={() => addTo?.(product)}>
                            <p>To Basket</p>
                            <ShoppingCart sx={{ color: 'white' }} />
                        </button>
                        <button className={styles.orderBtn} onClick={handleOrder}>
                            <p>Order now</p>
                            <ShoppingCart sx={{ color: 'white' }} />
                        </button>
                    </div>
                </div>
                <div className={styles.reviews}>
                    <div className={styles.wrapper}>
                        {product.reviews.map((review, id) => (
                            <Review key={review.reviewerName + id} {...review} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};
