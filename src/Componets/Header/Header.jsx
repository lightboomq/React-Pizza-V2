import React from "react";
import "./header.scss"
import {Link} from "react-router-dom"
function Header(){

      return(
      
            <div className="header">
                  <Link to = "/"><img className="react_header_logo"  src = "/img/react_header_logo.svg" alt=""/></Link>
                  <div className="search"><img width={22} height={22} src = "/img/search.svg" alt="лупа"/><input placeholder ="Поиск пиццы..."></input></div>
                  <Link style={{ textDecoration: 'none' }} to = "/Basket">
                        <div className="shoppingBasket">
                              <div>0 ₽</div>
                              <div className="delimetr"></div>
                              <div>🗑 0</div>  
                        </div>
                  </Link>             
            </div>
     
      )
}




export default Header;

