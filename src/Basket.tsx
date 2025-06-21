import type { BasketState} from "./Types"

import { BasketCard } from "./basket-card"

export function Basket({products, addTo, removeFrom, counts}: BasketState) {
    return (
        <>
        <div className="basket">
             {products && products.map((product) => (
                <BasketCard key={product.id} counts={counts} product={product} addTo={addTo} removeFrom={removeFrom}/>
            ))}
        </div>
           
        </>
    )
}