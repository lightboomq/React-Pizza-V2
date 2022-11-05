import React from "react";
import "./header.scss";
import {Link} from "react-router-dom";
import Search from "../Search/Search.jsx"
function Header({searchValue,setSearchValue}){

      return(
      
            <div className="header">
                  <Link to = "/"><img className="react_header_logo"  src = "/img/react_header_logo.svg" alt=""/></Link>
                  <Search searchValue={searchValue} setSearchValue={setSearchValue}/>
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

