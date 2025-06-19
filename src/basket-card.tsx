
import type { CardState } from "./Types"


export function BasketCard({product, id, addTo, removeFrom, counts}: CardState) {
    
    return (
        <>
                <div className="basket__card card" key={id}>
                    <div className="image-wrapper">
                        <img 
                        src={product.thumbnail} 
                        alt={product.title}
                        className="card__image"
                        />
                    </div>
                    <p className='card__price'>${product.price}</p>
                    <p className='card__title'>{product.title}</p>
                    <p className='card__rating'><img src="/src/assets/icons8-звезда-48.png" alt="star" className='products__star' />{product.rating}</p>
                    <button className='add-button' onClick={() => addTo(product)}>+</button>
                    <p>{counts?.[product.title]}</p>
                    <button className="remove-button" onClick={() => removeFrom?.(product.id)}>-</button>
          </div>
        </>
    )
}