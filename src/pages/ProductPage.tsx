import { useEffect } from "react";
import type { ProductPageProps } from "../Types";
import { ProductCard } from "./product-card";
import { useLocation, useNavigate } from "react-router";
import { Modal } from "../modal";
import { UseModal } from "../useModal";

export function ProductPage({visibleProducts, products, loadMoreRef, chosenFilter, addTo, setDashboardId}: ProductPageProps) {
  const {setShowModal, overlayRef, modalRef, useModalEffect} = UseModal()

  const location = useLocation()
  
  useModalEffect()

  const navigate = useNavigate()

  const toDashboard = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    const isBtn = target.closest("button") !== null
    if(!isBtn){
      const card = target.closest('.products__card')
      if(card){
        setDashboardId(card.id)
        navigate(`/dashboard&${card.id}`)
      }
      
     }
  }
  
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
          <div className="products__wrapper" onClick={toDashboard}>
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