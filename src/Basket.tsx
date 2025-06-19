import type { BasketState} from "./Types"

import { BasketCard } from "./basket-card"

export function Basket({products, addTo, removeFrom, counts}: BasketState) {
    return (
        <>
        <div className="basket">
             {products && products.map((product, id) => (
                <BasketCard counts={counts} product={product} id={id} addTo={addTo} removeFrom={removeFrom}/>
            ))}
        </div>
           
        </>
    )
}