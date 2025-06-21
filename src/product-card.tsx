
import type { CardState} from "./Types";



export function ProductCard({product, addTo}: CardState) {
 
    return (
        <>
            <div className="products__card" >
                {product && (
                    <div className="image-wrapper">
                        <img 
                        src={product.thumbnail} 
                        alt={product.title}
                        className="products__image"
                        />
                    </div>
                )}
                <p className='products__price'>${product.price}</p>
                    <p className='products__title'>{product.title}</p>
                    <p className='products__rating'><img src="/src/assets/icons8-звезда-48.png" alt="star" className='products__star' />{product.rating}</p>
                    <button className='basket-button' onClick={() => addTo(product)}>TO BASKET</button>
          </div>
        </>
    )
}


