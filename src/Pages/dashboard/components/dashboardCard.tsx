import { useNavigate } from 'react-router';

import { ShoppingCart } from '@mui/icons-material';
import { DashboardSwiper } from '../../../entities/dashboard/dashboardSwiper';
import type { CardState } from '@/Types';
import { HeartSvg } from '@/svg/heartSvg';
import { DashboardInfo } from '@/entities/dashboard/DashboardInfo';
import { Review } from '@/entities/review/review';
import styles from '@/pages/dashboard/Dashboard.module.css';
export function DashboardCard({ product, addTo, setShowModal }: CardState) {
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
                    <HeartSvg />
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
}
