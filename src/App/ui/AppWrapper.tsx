// src/components/AppWrapper.tsx

import { useAppLogic } from '../hooks/useApplogic';
import { MainLayout } from './MainLayout';
import { ProductEmptyState } from './ProductEmptyState';

const categories = [
    'beauty',
    'fragrances',
    'furniture',
    'groceries',
    'home-decoration',
    'kitchen-accessories',
    'laptops',
    'mens-shirts',
    'mens-shoes',
    'smartphones',
    'mens-watches',
    'mobile-accessories',
    'motorcycle',
    'skin-care',
    'sports-accessories',
    'sunglasses',
    'tablets',
    'tops',
    'vehicle',
    'womens-bags',
    'womens-dresses',
    'womens-jewellery',
    'womens-shoes',
    'womens-watches',
];

export function AppWrapper() {
    const {
        wrapperRef,
        visibleProducts,
        isFilterOpen,
        setIsFilterOpen,
        navigate,
        basket,
        counts,
        data,
        loading,
        error,
        loadMoreRef,
        addTo,
        removeFrom,
        deleteFrom,
    } = useAppLogic();

    if (loading) return <div>LOADING...</div>;
    if (error) return <div>{error}</div>;
    if (!data?.products?.length) return <ProductEmptyState />;

    return (
        <MainLayout
            navigate={navigate}
            counts={counts}
            wrapperRef={wrapperRef}
            visibleProducts={visibleProducts}
            products={data.products}
            loadMoreRef={loadMoreRef}
            addTo={addTo}
            basket={basket}
            removeFrom={removeFrom}
            deleteFrom={deleteFrom}
            setIsFilterOpen={setIsFilterOpen}
            isFilterOpen={isFilterOpen}
            categories={categories}
        />
    );
}
