import { useNavigate } from 'react-router';
import type { BasketState } from '@/Types';

import styles from './Basket.module.css';
import { UseModal } from '@/features/authModal/model/useModal';
import { BasketCard } from './components/basket-card';
import { AuthModal } from '@/features/authModal/AuthModal';
export function Basket({ basket, addTo, removeFrom, deleteFrom, counts }: BasketState) {
    const { setShowModal, overlayRef, modalRef } = UseModal();
    const navigate = useNavigate();

    UseModal();

    const goBack = () => {
        if (window.history.state && window.history.state.idx > 0) {
            navigate(-1);
        } else {
            navigate('/');
        }
    };

    return (
        <>
            <div className={styles.basket}>
                {basket.length === 0 && (
                    <>
                        <div className={styles.emptyContainer}>
                            <div className={styles.empty}>
                                There is nothing in the basket. <br /> Click the button below to
                                return to the main page.
                            </div>
                            <button type="button" className={styles.toMain} onClick={goBack}>
                                Go Back
                            </button>
                        </div>
                    </>
                )}
                {basket.length !== 0 && (
                    <div className={styles.container}>
                        <div className={styles.head}>
                            <div>
                                <h3 className={styles.title}>Basket</h3>
                                <p className={styles.count}>{counts.totalCount} products</p>
                            </div>
                            <button type="button" onClick={goBack} className={styles.toMainBtn}>
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
                    <div className={styles.order}>
                        <p className={styles.price}>
                            <span className={styles.priceSpan}>Total:</span>{' '}
                            <span className={styles.priceSpan}>{counts.totalPrice}</span>
                        </p>
                        <button
                            type="button"
                            className={styles.orderBtn}
                            onClick={() => setShowModal(true)}
                        >
                            Order
                        </button>
                        <AuthModal
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
