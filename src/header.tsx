import { BasketSvg } from "./basketSvg";
import { FilterSvg } from "./filterSvg";
import type { HeaderProps } from "./Types";


export function Header({navigate, counts}: HeaderProps) {
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
              <button type="button" className="filter">
                <FilterSvg/>
              </button>
            </div>
    </header>
    </>
  )
}