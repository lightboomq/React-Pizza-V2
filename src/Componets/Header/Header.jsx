import "./header.scss"

function Header(){
      return(
            <div className="Header">
                  <img className="react_header_logo.svg"  src = "/img/react_header_logo.svg" alt=""/>
                  <div className="search"><img width={22} height={22} src = "/img/search.svg" alt="лупа"/><input placeholder ="Поиск пиццы..."></input></div>
                  <div className="shoppingBasket">
                        <div>0 ₽</div>
                        <div className="delimetr"></div>
                        <div>🗑 0</div>
                  </div>

            </div>
      )
}




export default Header;

