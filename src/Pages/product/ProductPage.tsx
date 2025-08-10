import { AuthModal } from '../../features/authModal/AuthModal';
import { UseModal } from '@/features/authModal/model/useModal';
import { ProductCard } from '@/pages/product/components/product-card';
import type { Product, ProductPageProps } from '@/Types';

import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';

export function ProductPage({
    visibleProducts,
    products,
    loadMoreRef,
    chosenFilter,
    addTo,
}: ProductPageProps) {
    const { setShowModal, overlayRef, modalRef } = UseModal();

    const location = useLocation();

    const productsArr: Product[] = products.slice(0, visibleProducts).filter((product) => {
        if (chosenFilter.length !== 0) {
            return chosenFilter.includes(product.category);
        }
        return true;
    });
    UseModal();

    const navigate = useNavigate();

    const handleOnClick = (e: React.MouseEvent) => {
        const target = e.target as HTMLElement;
        const card = target.closest('.products__card');

        // Проверяем клик по конкретным элементам
        const isBasketButton = target.closest('.basket-button') !== null;
        const isFavoriteIcon = target.closest('.favorite-icon') !== null;

        if (!card) return; // Если клик был вне карточки

        if (isBasketButton) {
            // Обработка клика по кнопке корзины
            addTo(products[Number(card.id) - 1]);
            return;
        }

        if (isFavoriteIcon) {
            // Обработка клика по иконке избранного
            e.stopPropagation();
            setShowModal(true);
            return;
        }

        // Если клик по самой карточке
        localStorage.setItem('dashboardProduct', JSON.stringify(products[Number(card.id) - 1]));
        navigate(`/dashboard/${card.id}`);
    };
    useEffect(() => {
        // Восстановление при возврате
        if (location.state?.restoreScroll) {
            window.scrollTo(0, 0);
            // Форсируем проверку видимости
            setTimeout(() => {
                if (loadMoreRef?.current) {
                    const rect = loadMoreRef.current.getBoundingClientRect();
                    if (rect.top < window.innerHeight) {
                        // Эмулируем скролл если элемент уже в зоне видимости
                        window.dispatchEvent(new Event('scroll'));
                    }
                }
            }, 100);
        }
    }, [loadMoreRef, location.state?.restoreScroll]);

    return (
        <>
            <div className="products">
                <div className="products__wrapper" onClick={handleOnClick}>
                    {/* Рендер товаров */}
                    {productsArr.length !== 0 &&
                        productsArr.map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                                setShowModal={setShowModal}
                            />
                        ))}
                </div>
                <div ref={loadMoreRef}></div>
            </div>

            <AuthModal overlayRef={overlayRef} setShowModal={setShowModal} modalRef={modalRef} />
        </>
    );
}
