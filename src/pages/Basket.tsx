import { useNavigate } from "react-router"
import "../styles/basket.css"

import type { BasketState} from "../Types"

import { BasketCard } from "./basket-card"
import { Modal } from "../modal"
import { UseModal } from "../useModal"

export function Basket({basket, addTo, removeFrom, deleteFrom, counts}: BasketState) {
    const {setShowModal, overlayRef, modalRef, useModalEffect} = UseModal()
    const navigate = useNavigate()

    useModalEffect()

    const handleBack = () => {
        navigate('/', { state: { restoreScroll: true } });
    };

    return (
        <>
        
        <div className="basket">

            {basket.length === 0 && (<>
                <div className="basket-empty">There is nothing in the basket. <br /> Click the button below to return to the main page.</div>
                <button type="button" className="to-main" onClick={() => navigate('/')}>TO MAIN PAGE</button>
                </>
            )}
            {basket.length !== 0 && <div className="basket__container">
                {basket.length !== 0 && (
                    <>
                        <div className="basket-head">
                            <div>
                                <h3 className="basket-title">Basket</h3>
                                <p className="basket-count">{counts.totalCount} products</p>
                            </div>
                            <button type="button" onClick={handleBack} className="to-main-btn">{`<  `}TO MAIN</button>
                        </div>
                    </>
                )}
                
                 {basket.map((product) => (
                    <BasketCard key={product.id} counts={counts} product={product} addTo={addTo} removeFrom={removeFrom} deleteFrom={deleteFrom}/>
                ))}
            </div>
            }
        </div>
         {basket.length !== 0 && (
                <div className="order">
                                <p className="order__price"><span>Total:</span> <span>{counts.totalPrice}</span></p>
                                <button type="button" className="order__btn" onClick={() => setShowModal(true)}>Order</button>
                                <Modal overlayRef={overlayRef} setShowModal={setShowModal} modalRef={modalRef}/>
                </div>
            )}
        
        </>
    )
}