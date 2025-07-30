// src/components/MainLayout.tsx
import { Header } from '../header';
import { Filter } from '../Filter';
import { AppRoute } from '../AppRoute';

interface Props {
  navigate: any;
  counts: any;
  wrapperRef: React.RefObject<HTMLElement | null>;
  visibleProducts: number;
  products: any[];
  loadMoreRef: React.RefObject<HTMLDivElement>;
  addTo: (p: any) => void;
  chosenFilter: string[];
  basket: any;
  removeFrom: (p: any) => void;
  deleteFrom: (p: any) => void;
  setIsFilterOpen: (v: boolean) => void;
  setChosenFilter: (v: string[]) => void;
  isFilterOpen: boolean;
  categories: string[];
}

export function MainLayout({
  navigate, counts, wrapperRef, visibleProducts, products, loadMoreRef,
  addTo, chosenFilter, basket, removeFrom, deleteFrom,
  setIsFilterOpen, setChosenFilter, isFilterOpen, categories
}: Props) {
  return (
    <>
      <Header navigate={navigate} counts={counts} setIsFilterOpen={setIsFilterOpen} />
      <main ref={wrapperRef} className="wrapper">
        <AppRoute
          productPage={{ visibleProducts, products, loadMoreRef, addTo, chosenFilter }}
          basketState={{ basket, removeFrom, addTo, deleteFrom, counts }}
        />
        <Filter categorys={categories} chosenFilter={chosenFilter} setChosenFilter={setChosenFilter} isFilterOpen={isFilterOpen} />
      </main>
      {window.innerWidth <= 558 && <footer>footer</footer>}
    </>
  );
}
