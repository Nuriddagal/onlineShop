import './App.css'
import { useSelector } from 'react-redux';

import { useAppDispatch, type RootState } from './state';

import { useEffect } from 'react';
import { fetchProducts } from './products';



function App() {
const {data, loading, error} = useSelector((state: RootState) => state.products);
const dispatch = useAppDispatch();

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
          <div className="products__card">
            {data?.products?.length && (
              <div className="image-wrapper">
                <img 
                src={data?.products[0].images[0]} 
                alt={data?.products[0].title}
                className="products__image"
                />
              </div>
            )}
            <p className='products__price'>${Math.floor((Math.random() * 50) + 10)}</p>
            <p className='products__title'>{data?.products[0].title}</p>
            <p className='products__rating'><img src="/src/assets/icons8-звезда-48.png" alt="star" className='products__star' />{data?.products[0]?.rating}</p>
            <button className='basket-button'>TO BASKET</button>
          </div>
          <div className="products__card">
            {data?.products?.length && (
              <div className="image-wrapper">
                <img 
                src={data?.products[0].images[0]} 
                alt={data?.products[0].title}
                className="products__image"
                />
              </div>
            )}
            <p className='products__price'>${Math.floor((Math.random() * 50) + 10)}</p>
            <p className='products__title'>{data?.products[0].title}</p>
            <p className='products__rating'><img src="/src/assets/icons8-звезда-48.png" alt="star" className='products__star' />{data?.products[0]?.rating}</p>
            <button className='basket-button'>TO BASKET</button>
          </div>
          <div className="products__card">
            {data?.products?.length && (
              <div className="image-wrapper">
                <img 
                src={data?.products[0].images[0]} 
                alt={data?.products[0].title}
                className="products__image"
                />
              </div>
            )}
            <p className='products__price'>${Math.floor((Math.random() * 50) + 10)}</p>
            <p className='products__title'>{data?.products[0].title}</p>
            <p className='products__rating'><img src="/src/assets/icons8-звезда-48.png" alt="star" className='products__star' />{data?.products[0]?.rating}</p>
            <button className='basket-button'>TO BASKET</button>
          </div>
          <div className="products__card">
            {data?.products?.length && (
              <div className="image-wrapper">
                <img 
                src={data?.products[0].images[0]} 
                alt={data?.products[0].title}
                className="products__image"
                />
              </div>
            )}
            <p className='products__price'>${Math.floor((Math.random() * 50) + 10)}</p>
            <p className='products__title'>{data?.products[0].title}</p>
            <p className='products__rating'><img src="/src/assets/icons8-звезда-48.png" alt="star" className='products__star' />{data?.products[0]?.rating}</p>
            <button className='basket-button'>TO BASKET</button>
          </div>
          <div className="products__card">
            {data?.products?.length && (
              <div className="image-wrapper">
                <img 
                src={data?.products[0].images[0]} 
                alt={data?.products[0].title}
                className="products__image"
                />
              </div>
            )}
            <p className='products__price'>${Math.floor((Math.random() * 50) + 10)}</p>
            <p className='products__title'>{data?.products[0].title}</p>
            <p className='products__rating'><img src="/src/assets/icons8-звезда-48.png" alt="star" className='products__star' />{data?.products[0]?.rating}</p>
            <button className='basket-button'>TO BASKET</button>
          </div>
          <div className="products__card">
            {data?.products?.length && (
              <div className="image-wrapper">
                <img 
                src={data?.products[0].images[0]} 
                alt={data?.products[0].title}
                className="products__image"
                />
              </div>
            )}
            <p className='products__price'>${Math.floor((Math.random() * 50) + 10)}</p>
            <p className='products__title'>{data?.products[0].title}</p>
            <p className='products__rating'><img src="/src/assets/icons8-звезда-48.png" alt="star" className='products__star' />{data?.products[0]?.rating}</p>
            <button className='basket-button'>TO BASKET</button>
          </div>
          </div>
        </div>
      </main>
      
    </>
  )
}

export default App
