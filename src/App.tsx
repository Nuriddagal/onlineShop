import './styles/App.css'

import { useSelector } from 'react-redux';

import { useEffect, useRef, useState } from 'react';

import type { Product } from './Types';

import { useAppDispatch, type RootState } from './redux/state.ts';
import { fetchProducts } from './redux/products.ts';
import { addToBasket, removeFromBasket } from './redux/basket.ts';

import { AppRoute } from './AppRoute.tsx';

import { useNavigate } from 'react-router';
import { useLocation } from 'react-router';



function App() {
  const [load, setLoad] = useState<boolean>(false);

  const [visibleProducts, setvisibleProducts] = useState<number>(30);

  const loadMoreRef = useRef<HTMLDivElement | null>(null);
  const wrapperRef = useRef<HTMLElement>(null)
  const observerRef = useRef<IntersectionObserver | null>(null)

  const location = useLocation();
  const navigate = useNavigate();

  const {data, loading, error} = useSelector((state: RootState) => state.products);
  const {basket, counts} = useSelector((state: RootState) => state.basket);

  const dispatch = useAppDispatch();
  function addTo(product: Product)  {
    dispatch(addToBasket(product))
  }

  function removeFrom(product: Product)  {
    dispatch(removeFromBasket(product))
  }
  const initObserver = () => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading) {
          setvisibleProducts(prev => Math.min(prev + 30, data?.products?.length || 0));
        }
      },
      { threshold: 0.1 }
    );

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    observerRef.current = observer;
  };
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
    const currentRef = loadMoreRef.current;
    initObserver()
    return () => {
      if (currentRef) {
        setLoad(!load)
        observerRef.current?.disconnect();
      }
    };
  }, [loading, load, visibleProducts, data?.products.length]);

  useEffect(() => {
    if(location.pathname === "/") {
      initObserver()
    };
    if(location.pathname === "/basket") {
      wrapperRef.current?.classList.add("basket-wrapper")
    } else{
      wrapperRef.current?.classList.remove("basket-wrapper")
    }
  },[location])

  if(loading) return <div>LOADING...</div>
  
  if(error) return <div>{error}</div>
  
  if (!data?.products?.length) {
    return (
      <div className="empty-state">
        <img src="#" alt="No products" />
        <p>No products available</p>
      </div>
    );
  } 
      
  const products = data.products;

  return (
    <>
      <header className='header'>
        <div>
          <h1 className='shopName'>blueberries</h1>
            <input type="search" name="search" id="search" placeholder='The search is not working yet'/>
          <button className='toBasket-btn' onClick={() => navigate("/basket")}>basket</button>
        </div>
      </header>
      <main ref={wrapperRef} className='wrapper'>
        <AppRoute productPage={{visibleProducts, products, loadMoreRef, addTo}} basketState={{basket, removeFrom, addTo, counts}}/>
      </main>
      {window.innerWidth <= 558 && <footer>footer</footer>}
    </>
  )
}

export default App
