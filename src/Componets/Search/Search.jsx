import React from "react";
import "./search.scss"


function Search({searchValueProps,setSearchValueProps}){
      
return(
<div className="search_block">
      <div className="search">
            <div className="search_input">
                  <img className="lypa" width={18} height={18} src = "/img/search.svg" alt="лупа" />
                  <input value={searchValueProps} onChange={(event)=>setSearchValueProps(event.target.value)} placeholder ="Поиск..."></input>
            </div>
            {searchValueProps?<img onClick ={()=>setSearchValueProps('')} className="clear_input" width={13} height={13} src = "/img/clear_input.svg" alt="Очистка поска" />:""}
      </div>   
</div>
 )
}


export default Search;