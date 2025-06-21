import './App.css'
import { useSelector } from 'react-redux';

import { useAppDispatch, type RootState } from './state';

import { useEffect, useRef, useState } from 'react';

import { fetchProducts } from './products';

import type { Product } from './Types';

import { addToBasket, removeFromBasket } from './basket';

import { ProductCard } from './product-card';
import { Basket } from "./Basket.tsx" 



function App() {
  const [load, setLoad] = useState<boolean>(false);
  const [productId, setProductId] = useState<number>(30);
  const loadMoreRef = useRef<HTMLDivElement>(null);

  const {data, loading, error} = useSelector((state: RootState) => state.products);
  const {basket, counts} = useSelector((state: RootState) => state.basket);

  const dispatch = useAppDispatch();
  function addTo(product: Product)  {
    dispatch(addToBasket(product))
  }

  function removeFrom(product: Product)  {
    dispatch(removeFromBasket(product))
  }
  useEffect(() => {
    const loadProducts = async () => {
      try {
        await dispatch(fetchProducts()).unwrap()
      } catch (err) {
        console.error('Failed to load products:', err)
      }
    }
    loadProducts()
  }, [dispatch])
  
  useEffect(() => {
    if(productId === 195) return;

    const currentRef = loadMoreRef.current;
    if(!currentRef) return;

    const observer = new IntersectionObserver((entries) => {
      setLoad(prevLoad => !prevLoad)
      if (entries[0].isIntersecting && !loading) {
        setProductId(productId => Math.min(productId + 30, data?.products?.length || 0)); // Если мы достигли наблюдаемого элемента, загружаем следующую страницу
      }
    }, { threshold: 0.1 });

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        setLoad(!load)
        observer.unobserve(currentRef);
      }
    };
  }, [loading, load, productId, data?.products.length]);
  if(loading) return <div>LOADING...</div>
  
  if(error) return <div>{error}</div>
  
  if (!data?.products?.length) {
    return (
      <div className="empty-state">
        <img src="/empty-cart.svg" alt="No products" />
        <p>No products available</p>
      </div>
    );
  } 
      
  return (
    <>
      <header className='header'><h1>blueberries</h1></header>
      <main className='wrapper'>
        <div className="products">
          <div className="products__wrapper">
            {data?.products?.length && data?.products.slice(0, productId).map((product) => (
              <ProductCard key={product.id} product={product} addTo={addTo}/>
            ))
            }
          {loading && (
            <div className="products__card loading-state">
              <div className="image-wrapper skeleton"></div>
              <p className='products__price skeleton'></p>
              <p className='products__title skeleton'></p>
              <p className='products__rating skeleton'></p>
              <button className='basket-button skeleton'></button>
            </div>
          )}
          </div>
          <div ref={loadMoreRef}></div>
        </div>
        <Basket counts={counts} products={basket} addTo={addTo} removeFrom={removeFrom}/>
      </main>
      
    </>
  )
}

export default App
