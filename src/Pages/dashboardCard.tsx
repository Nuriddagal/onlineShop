import { useNavigate } from 'react-router';
import { Review } from '../entities/review/ui/review';
import { HeartSvg } from '../svg/heartSvg';
import type { CardState } from '../Types';
import { DashboardInfo } from '../entities/dashboard/ui/DashboardInfo';
import { ShoppingCart } from '@mui/icons-material';
import { DashboardSwiper } from '@/Features/dashboard/ui/dashboardSwiper';

export function DashboardCard({ product, addTo, setShowModal }: CardState) {
    const navigate = useNavigate();

    const handleOrder = (): void => {
        addTo?.(product);
        navigate('/basket');
    };

    return (
        <>
            <div className="dashboard__card">
                <DashboardSwiper images={product.images} title={product.title} />

                <button
                    className="favorite-icon"
                    onClick={() => (setShowModal ? setShowModal(true) : '')}
                >
                    <HeartSvg />
                </button>

                <DashboardInfo product={product} />
                <div className="dashboard__order">
                    <p className="dashboard__price">Price: ${product.price}</p>
                    <div className="btn-wrapper">
                        <button className="dashboard__basket-btn" onClick={() => addTo?.(product)}>
                            <p>To Basket</p>
                            <ShoppingCart sx={{ color: 'white' }} />
                        </button>
                        <button className="dashboard__order-btn" onClick={handleOrder}>
                            <p>Order now</p>
                            <ShoppingCart sx={{ color: 'white' }} />
                        </button>
                    </div>
                </div>
                <div className="dashboard__reviews-block reviews">
                    <div className="reviews__wrapper">
                        {product.reviews.map((review, id) => (
                            <Review key={review.reviewerName + id} {...review} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
