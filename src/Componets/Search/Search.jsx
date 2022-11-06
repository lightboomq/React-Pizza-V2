import React from "react";
import "./search.scss"


function Search({searchValueProps,setSearchValueProps}){
      
return(
   
      <div className="search">
            <div className="search_block">
                  <img className="lypa" width={22} height={22} src = "/img/search.svg" alt="лупа" />
                  <input value={searchValueProps} onChange={(event)=>setSearchValueProps(event.target.value)} placeholder ="Поиск пиццы..."></input>
            </div>
            {searchValueProps?<img onClick ={()=>setSearchValueProps('')} className="clear_input" width={16} height={16} src = "/img/clear_input.svg" alt="Очистка поска" />:""}
      </div>   
 
 )
}


export default Search;