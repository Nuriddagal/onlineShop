import { useLocation } from "react-router";
import { BasketSvg } from "./svg/basketSvg";
import { FilterSvg } from "./svg/filterSvg";
import type { HeaderProps } from "./Types";
import { useEffect, useState } from "react";


export function Header({navigate, counts, setIsFilterOpen}: HeaderProps) {
  const location = useLocation()
  const [isBasket, setIsBasket] = useState<boolean>(false)
  useEffect(() => {
    if(location.pathname === "/basket" || location.pathname === "/dashboard"){
      setIsBasket(true)
      setIsFilterOpen(false)
    }else{
      setIsBasket(false)
    }
  },[location])
  return(
    <>
    <header className='header'>
            <div>
              <h1 className='shopName'>blueberries</h1>
                <input type="search" name="search" id="search" placeholder='The search is not working yet'/>
              <button className='toBasket-btn' onClick={() => navigate("/basket")}>
                  <BasketSvg/>
                  {counts.totalCount !== 0 && <p className="header__basket-count">{counts.totalCount}</p>}
              </button>
              {!isBasket && <button type="button" className="filter" onClick={() => setIsFilterOpen((prevState => !prevState))}>
                <FilterSvg/>
              </button>
              }
            </div>
    </header>
    </>
  )
}