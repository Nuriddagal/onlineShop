
import { DeleteSvg } from "../svg/deleteSvg"
import type { CardState } from "../Types"


export function BasketCard({product, addTo, removeFrom, deleteFrom, counts}: CardState) {
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
                    <button type="button" className="delete_button" onClick={() => deleteFrom?.(product)}>
                        <DeleteSvg />
                    </button>
                    <p className='card__price'>${((counts?.[product.title] || 1) * Math.round(product.price))}</p>

                    <div className="card__info">
                        <div className="wrap">
                            <p className='card__title'>{product.title} - {product.brand}</p>
                            <p className="card__minimumOrderQuantity">{product.minimumOrderQuantity} pcs</p>
                            <p className="card__shippingInfo">{product.shippingInformation}</p>
                        </div>
                    </div>
                    
                    <div className="controller">
                        <button className='card__add-button' onClick={() => addTo(product)}>+</button>
                        <input type="text" value={counts?.[product.title]} className="card__product-count" readOnly/>
                        <button className="card__remove-button" onClick={() => removeFrom?.(product)}>-</button>
                    </div>       
            </div>
        </>
    )
}