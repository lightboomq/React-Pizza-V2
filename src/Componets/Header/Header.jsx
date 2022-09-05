import "./header.scss"

function Header(){
      return(
            <div className="Header">
                  <h2>REACT PIZZA V2
                        <p>Самая вкусная пицца</p>
                  </h2>
                  <div className="Search"><img width={22} height={22} src = "/img/search.svg" alt="лупа"/><input placeholder ="Поиск пиццы..."></input></div>
                  <div className="ShoppingBasket">
                        <div>0 ₽</div>
                        <div className="Delimetr"></div>
                        <div>🗑 0</div>
                  </div>
            </div>
      )
}




export default Header;

