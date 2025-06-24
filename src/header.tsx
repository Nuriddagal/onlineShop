import type { NavigateFunction } from "react-router";
type HeaderProps = {
  navigate: NavigateFunction
}

export function Header({navigate}: HeaderProps) {
  return(
    <>
    <header className='header'>
            <div>
              <h1 className='shopName'>blueberries</h1>
                <input type="search" name="search" id="search" placeholder='The search is not working yet'/>
              <button className='toBasket-btn' onClick={() => navigate("/basket")}>basket</button>
            </div>
    </header>
    </>
  )
}