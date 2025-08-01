import { useNavigate, useParams } from 'react-router';
import { DashboardCard } from './Pages/dashboardCard';
import { useEffect, useState } from 'react';
import type { Product } from './Types';
import { useDispatch } from 'react-redux';
import { addToBasket } from './Pages/basket/model/basket';

export function Dashboard() {
  const { dashboardId } = useParams();

  const [product, setProduct] = useState<Product | null>(null);

  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  function addTo(product: Product) {
    dispatch(addToBasket(product));
  }

  useEffect(() => {
    const saved = localStorage.getItem('dashboardProduct');
    console.log('dashboardId from params:', dashboardId);
    console.log('saved from localStorage:', saved);

    if (saved) {
      const savedProduct = JSON.parse(saved);
      console.log('parsed savedProduct.id:', savedProduct.id);
      if (savedProduct.id.toString() === dashboardId) {
        console.log('IDs match, setting product');
        setProduct(savedProduct);
      } else {
        console.log('IDs do not match');
      }
    } else {
      console.log('No saved product in localStorage');
    }
    setLoading(false);
  }, [dashboardId]);

  if (loading) return <p>Loading...</p>;

  if (!product)
    return (
      <div>
        <p>No product yet</p>
        <p>dashboardId: {dashboardId}</p>
        <p>localStorage product: {localStorage.getItem('dashboardProduct')}</p>
        <button onClick={() => navigate('/')}>Go Home</button>
      </div>
    );

  return (
    <div className="dashboard">
      <button type="button" className="to-main" onClick={() => navigate(-1)}>
        TO MAIN PAGE
      </button>
      <DashboardCard product={product} addTo={addTo} />
    </div>
  );
}
