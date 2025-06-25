import { useEffect } from "react";
import type { ProductPageProps } from "../Types";
import { ProductCard } from "./product-card";
import { useLocation } from "react-router";
import { Modal } from "../modal";
import { UseModal } from "../useModal";

export function ProductPage({visibleProducts, products, loadMoreRef, chosenFilter, addTo}: ProductPageProps) {
  const {setShowModal, overlayRef, modalRef, useModalEffect} = UseModal()

  const location = useLocation()
  
  useModalEffect()
  
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
  }, []);

    return (
        <>
        <div className="products">
          <div className="products__wrapper">
            {/* Рендер товаров */}
            {chosenFilter.length !== 0 && products.slice(0, visibleProducts).map((product) => {
              if(chosenFilter.includes(product.category)){
                return (
              <ProductCard key={product.id} product={product} addTo={addTo} setShowModal={setShowModal}/>
              )
            }   
          })
            }
            {chosenFilter.length === 0 && products.slice(0, visibleProducts).map((product) => (
              <ProductCard key={product.id} product={product} addTo={addTo} setShowModal={setShowModal}/>
            ))}
          </div>
          <div ref={loadMoreRef}></div>
        </div>
        {/* Затемняющий оверлей */}
        <Modal overlayRef={overlayRef} setShowModal={setShowModal} modalRef={modalRef}/>
        </>
    )
}