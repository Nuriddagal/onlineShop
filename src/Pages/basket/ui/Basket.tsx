import { useNavigate } from 'react-router';
import '@/styles/basket.css';
import '@/styles/mediaBasket.css';
import type { BasketState } from '@/Types';
import { UseModal } from '@/Features/modal/model/useModal';
import { BasketCard } from '@/Pages/basket-card';
import { Modal } from '@/Features/modal/ui/modal';

export function Basket({ basket, addTo, removeFrom, deleteFrom, counts }: BasketState) {
    const { setShowModal, overlayRef, modalRef, useModalEffect } = UseModal();
    const navigate = useNavigate();

    useModalEffect();

    const goBack = () => {
        if (window.history.state && window.history.state.idx > 0) {
            navigate(-1);
        } else {
            navigate('/');
        }
    };

    return (
        <>
            <div className="basket">
                {basket.length === 0 && (
                    <>
                        <div className="empty-container">
                            <div className="basket-empty">
                                There is nothing in the basket. <br /> Click the button below to
                                return to the main page.
                            </div>
                            <button type="button" className="to-main" onClick={goBack}>
                                Go Back
                            </button>
                        </div>
                    </>
                )}
                {basket.length !== 0 && (
                    <div className="basket__container">
                        <div className="basket-head">
                            <div>
                                <h3 className="basket-title">Basket</h3>
                                <p className="basket-count">{counts.totalCount} products</p>
                            </div>
                            <button type="button" onClick={goBack} className="to-main-btn">
                                {`<  `}GO BACK
                            </button>
                        </div>

                        {basket.map((product) => (
                            <BasketCard
                                key={product.id}
                                counts={counts}
                                product={product}
                                addTo={addTo}
                                removeFrom={removeFrom}
                                deleteFrom={deleteFrom}
                            />
                        ))}
                    </div>
                )}
                {basket.length !== 0 && (
                    <div className="order">
                        <p className="order__price">
                            <span>Total:</span> <span>{counts.totalPrice}</span>
                        </p>
                        <button
                            type="button"
                            className="order__btn"
                            onClick={() => setShowModal(true)}
                        >
                            Order
                        </button>
                        <Modal
                            overlayRef={overlayRef}
                            setShowModal={setShowModal}
                            modalRef={modalRef}
                        />
                    </div>
                )}
            </div>
        </>
    );
}
