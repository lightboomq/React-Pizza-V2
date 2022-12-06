import React from "react";
import "./header.scss";
import {Link} from "react-router-dom";
function Header(){
      return(
      
            <div className="header">
                  <Link to = "/"><img className="header__react-logo"  src = "/img/header__react-logo.svg" alt="logo"/></Link>
                  <Link style={{ textDecoration: 'none' }} to = "/Basket">
                        <div className="header__shopping-cart">
                              <div>0 ₽</div>
                              <div className="header__delimitr"></div>
                              <img className="header__img-icon"width={26} height={26} src = "/img/header__icon-basket.png" alt="basket"/> 
                              <div>0</div> 
                        </div>
                  </Link>             
            </div>
     
      )
}


export default Header;

