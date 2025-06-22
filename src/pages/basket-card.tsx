
import type { CardState } from "../Types"


export function BasketCard({product, addTo, removeFrom, counts}: CardState) {
    return (
        <>
            <div className="basket__card card">
                    <div className="card__image-wrapper">
                        <img 
                        src={product.thumbnail} 
                        alt={product.title}
                        className="card__image"
                        />
                    </div>
                    <p className='card__price'>${((counts?.[product.title] || 1) * Math.round(product.price)) - (counts?.[product.title] || 1) / 100}</p>
                    <p className='card__title'>{product.title}</p>
                    <button className='card__add-button' onClick={() => addTo(product)}>+</button>
                    <p className='card__product-count'>{counts?.[product.title]}</p>
                    <button className="card__remove-button" onClick={() => removeFrom?.(product)}>-</button>
            </div>
        </>
    )
}