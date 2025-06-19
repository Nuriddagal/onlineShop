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

  function removeFrom(id: number)  {
    dispatch(removeFromBasket(id))
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
    if(productId === 195) return
    const observer = new IntersectionObserver((entries) => {
      setLoad(!load)
      if (entries[0].isIntersecting && !loading) {
        productId === 180 ? setProductId(productId => productId + 15):
        setProductId(productId => productId + 30); // Если мы достигли наблюдаемого элемента, загружаем следующую страницу
      }
    }, { threshold: 1.0 });

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    return () => {
      if (loadMoreRef.current) {
        setLoad(!load)
        observer.unobserve(loadMoreRef.current);
      }
    };
  }, [loading, productId]);
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
            {data?.products?.length && data?.products.map((product, id) => id <= productId && (
              <ProductCard product={product} id={id} addTo={addTo}/>
            ))
            }
          {load &&(
            <div className="products__card">
                
                <div className="image-wrapper">
                  LOADING...
                  {data?.total}
                </div>
               
                <p className='products__price'>$LOADING</p>
                    <p className='products__title'>LOADING</p>
                    <p className='products__rating'><img src="/src/assets/icons8-звезда-48.png" alt="star" className='products__star' />LOADING</p>
                    <button className='basket-button'>TO BASKET</button>
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
