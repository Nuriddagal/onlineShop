import './styles/App.css'
import './styles/mediaStyle.css'
import { useSelector } from 'react-redux';

import { useCallback, useEffect, useRef, useState } from 'react';

import type { Product } from './Types';

import { useAppDispatch, type RootState } from './redux/state';
import { addToBasket, deleteFromBasket, removeFromBasket } from './redux/basket';

import { AppRoute } from './AppRoute';

import { useNavigate } from 'react-router';
import { useLocation } from 'react-router';
import { Header } from './header';
import { Filter } from './Filter';
import { useLoadData } from './useLoadData';



function App() {
  const [load, setLoad] = useState<boolean>(false);

  const category = ["beauty", "fragrances", "furniture", "groceries", "home-decoration",
      "kitchen-accessories", "laptops", "mens-shirts", "mens-shoes", "smartphones",
      "mens-watches","mobile-accessories","motorcycle","skin-care","sports-accessories",
      "sunglasses","tablets","tops","vehicle","womens-bags",
      "womens-dresses","womens-jewellery","womens-shoes",
      "womens-watches"];
    
  const [visibleProducts, setvisibleProducts] = useState<number>(30);

  const [dashboardId, setDashboardId] = useState<string>('');

  const [chosenFilter, setChosenFilter] = useState<string[]>([]);    
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false)
  
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
  function deleteFrom(product: Product)  {
    dispatch(deleteFromBasket(product))
  }

  useLoadData(dispatch);

  const initObserver = useCallback(() => {
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
  },[data?.products?.length, loading]);
  
  
  useEffect(() => {
    const currentRef = loadMoreRef.current;
    initObserver()
    return () => {
      if (currentRef) {
        setLoad(!load)
        observerRef.current?.disconnect();
      }
    };
  }, [loading, load, visibleProducts, data?.products.length, initObserver]);

  useEffect(() => {
    if(location.pathname === "/") {
      initObserver()
    };
    if(location.pathname === "/basket") {
      wrapperRef.current?.classList.add("basket-wrapper")
    } else{
      wrapperRef.current?.classList.remove("basket-wrapper")
    }
  },[initObserver, location])

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
      <Header navigate={navigate} counts={counts} setIsFilterOpen={setIsFilterOpen}/>
      <main ref={wrapperRef} className='wrapper'>
        <AppRoute dashboardId={Number(dashboardId)} productPage={{visibleProducts, products, loadMoreRef, addTo, chosenFilter, setDashboardId}} basketState={{basket, removeFrom, addTo, deleteFrom, counts}} dashboard={{product:products[Number(dashboardId) - 1], addTo}}/>
        <Filter categorys={category} chosenFilter={chosenFilter} setChosenFilter={setChosenFilter} isFilterOpen={isFilterOpen}/>
      </main>
      {window.innerWidth <= 558 && <footer>footer</footer>}
    </>
  )
}

export default App
