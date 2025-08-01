// src/components/MainLayout.tsx

import type { Dispatch, SetStateAction } from 'react';
import { Filter } from '../../Features/productFilter/ui/Filter';
import { Header } from '../../header';
import { AppRoute } from '../providers/AppRoute';
import { useSelector } from 'react-redux';
import { selectChosenFilter } from '../../Features/productFilter/model/selectors';

interface Props {
  navigate: any;
  counts: any;
  wrapperRef: React.RefObject<HTMLElement | null>;
  visibleProducts: number;
  products: any[];
  loadMoreRef: React.RefObject<HTMLDivElement | null>;
  addTo: (p: any) => void;
  basket: any;
  removeFrom: (p: any) => void;
  deleteFrom: (p: any) => void;
  setIsFilterOpen: Dispatch<SetStateAction<boolean>>
  isFilterOpen: boolean;
  categories: string[];
}

export function MainLayout({
  navigate, counts, wrapperRef, visibleProducts, products, loadMoreRef,
  addTo,  basket, removeFrom, deleteFrom,
  setIsFilterOpen, isFilterOpen, categories
}: Props) {
  const chosenFilter: string[] = useSelector(selectChosenFilter)
  return (
    <>
      <Header navigate={navigate} counts={counts} setIsFilterOpen={setIsFilterOpen} />
      <main ref={wrapperRef} className="wrapper">
        <AppRoute
          productPage={{ visibleProducts, products, loadMoreRef, addTo, chosenFilter }}
          basketState={{ basket, removeFrom, addTo, deleteFrom, counts }}
        />
        <Filter categorys={categories} isFilterOpen={isFilterOpen} />
      </main>
      {window.innerWidth <= 558 && <footer>footer</footer>}
    </>
  );
}
