import React from "react";
import "./search.scss"
import {SearchContext} from "../../App";

function Search(){
const {searchValue,setSearchValue} = React.useContext(SearchContext);

      
return(
<div className="search_block">
      <div className="search">
            <div className="search_input">
                  <img className="lypa" width={18} height={18} src = "/img/search.svg" alt="лупа" />
                  <input value={searchValue} onChange={(event)=>setSearchValue(event.target.value)} placeholder ="Поиск..."></input>
            </div>
            {searchValue?<img onClick ={()=>setSearchValue('')} className="clear_input" width={13} height={13} src = "/img/clear_input.svg" alt="Очистка поска" />:""}
      </div>   
</div>
 )
}


export default Search;