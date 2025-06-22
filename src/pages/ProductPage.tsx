import { useEffect, useRef, useState } from "react";
import type { ProductPageProps } from "../Types";
import { ProductCard } from "./product-card";
import { useLocation } from "react-router";

export function ProductPage({visibleProducts, products, loadMoreRef, addTo}: ProductPageProps) {
  const [showModal, setShowModal] = useState(false);

  const modalRef = useRef<HTMLDivElement>(null);
  const scrollPosition = useRef<number>(0);
  const overlayRef = useRef<HTMLDivElement>(null)

  const location = useLocation()

  useEffect(() => {
    const b = document.body;
      
    if (showModal) {
       // Сохраняем позицию скролла
      scrollPosition.current = window.scrollY;
      // Блокируем скролл
      b.style.overflowY = 'scroll';
      b.style.position = 'fixed';
      b.style.top = `-${scrollPosition.current}px`;
      b.style.width = '100%';

      overlayRef.current?.classList.add("active");
      modalRef.current?.classList.add("open");
    } else {
      // Разблокируем скролл и восстанавливаем позицию
      b.style.overflow = '';
      b.style.position = '';
      b.style.top = '';
      b.style.width = '';
      window.scrollTo(0, scrollPosition.current);
      
      overlayRef.current?.classList.remove("active");
      modalRef.current?.classList.remove("open");
    }
  }, [showModal]);
  
  
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
            {products.slice(0, visibleProducts).map((product) => (
              <ProductCard key={product.id} product={product} addTo={addTo} setShowModal={setShowModal}/>
            ))
            }
          </div>
          <div ref={loadMoreRef}></div>
        </div>
        {/* Затемняющий оверлей */}
        <div ref={overlayRef} className="modal-overlay"></div>

        {/* Модальное окно */}
        <div ref={modalRef} className="notSignIn">
                <p>!!TO ADD TO FAVORITE!!<br/> !!FIRST LOG IN!!</p>
                <div>
                  <button type="button" className="modalClose" onClick={() => {
                    alert("Server not ready yet!")
                    setShowModal(false)
                  }}>Log In</button>
                  <button type="button" className="modalClose" onClick={() => setShowModal(false)}>close</button>
                </div>
                
        </div>
        </>
    )
}