import { BasketSvg } from "../svg/basketSvg";
import { HeartSvg } from "../svg/heartSvg";
import { StarSvg } from "../svg/starSvg";
import type { CardState} from "../Types";


export function ProductCard({product}: CardState) {

    return (
        <>
            <div className="products__card" id={product.id.toString()}>
                    <div className="image-wrapper">
                        <img 
                        src={product.thumbnail} 
                        alt={product.title}
                        className="products__image"
                        />
                    <button className="favorite-icon" >
                        <HeartSvg />
                    </button>
                    </div>
                    <p className='products__price'>${product.price}</p>
                    <p className='products__title'>{product.title}</p>
                    <p className='products__rating'><StarSvg />{product.rating}</p>
                    <button className='basket-button'>
                        <p>{product.shippingInformation.replace("Ships", '')}</p><BasketSvg/>
                    </button>
          </div>
        </>
    )
}


