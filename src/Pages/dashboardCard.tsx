import { useNavigate } from "react-router";
import { Review } from "../review";
import { BasketSvg } from "../svg/basketSvg";
import { HeartSvg } from "../svg/heartSvg";
import type { CardState} from "../Types";
import { DashboardInfo } from '../DashboardInfo';
import { DashboardSwiper } from '../dashboardSwiper';


export function DashboardCard({product, addTo, setShowModal}: CardState) {
    const navigate = useNavigate()

    const handleOrder = ():void => {
        addTo?.(product)
        navigate("/basket")
    }

    return (
        <>
            <div className="dashboard__card" >
                    
                    <DashboardSwiper images={product.images} title={product.title}/>

                    <button className="favorite-icon" onClick={() => setShowModal?setShowModal(true):''}>
                        <HeartSvg />
                    </button>
                    
                    <DashboardInfo product={product}/>
                    <div className="dashboard__order">
                        <p className='dashboard__price'>Price: ${product.price}</p>
                        <div className="btn-wrapper">
                            <button className='dashboard__basket-btn' onClick={() => addTo?.(product)}>
                                <p>To Basket</p><BasketSvg/>
                            </button>
                            <button className='dashboard__order-btn' onClick={handleOrder}>
                                <p>Order now</p><BasketSvg/>
                            </button>
                        </div>
                        
                    </div>
                    <div className="dashboard__reviews-block reviews">
                        <div className="reviews__wrapper">
                            {product.reviews.map((review, id) => (
                            <Review key={review.reviewerName + id} {...review}/>
                        ))}
                        </div>
                    </div>
          </div>
        </>
    )
}


