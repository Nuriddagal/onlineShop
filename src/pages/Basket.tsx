import { useNavigate } from "react-router"
import "../styles/basket.css"

import type { BasketState} from "../Types"

import { BasketCard } from "./basket-card"

export function Basket({basket, addTo, removeFrom, counts}: BasketState) {
    const navigate = useNavigate()

    const handleBack = () => {
        navigate('/', { state: { restoreScroll: true } });
    };

    return (
        <>
        
        <div className="basket">

            {basket.length === 0 && (<>
                <div>There is nothing in the basket. Click the button below to return to the main page.</div>
                <button type="button" onClick={() => navigate('/')}>TO MAIN PAGE</button>
                </>
            )}

            {basket.length !== 0 && <button type="button" onClick={handleBack} className="to-main-btn">{`< `}TO MAIN</button>}
                <div className="basket-head">
                <h3 className="basket-title">Basket</h3>
                <p className="basket-count">{counts.totalCount} products</p>
                </div>
             {basket && basket.map((product) => (
                <BasketCard key={product.id} counts={counts} product={product} addTo={addTo} removeFrom={removeFrom}/>
            ))}
            
        </div>
        <div className="order">
                <p>Total: {counts.totalPrice}</p>
        </div>
        </>
    )
}