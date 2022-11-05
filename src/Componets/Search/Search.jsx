import React from "react";
import "./search.scss"


function Search({searchValue,setSearchValue}){
      console.log(searchValue)
      return(
            
            <div className="search">
                  <img className="lypa" width={22} height={22} src = "/img/search.svg" alt="лупа" />
                  <input value={searchValue} onChange={(event)=>setSearchValue(event.target.value)} placeholder ="Поиск пиццы..."></input>
                  {searchValue ? <img onClick ={()=>setSearchValue('')} className="clear_input" width={16} height={16} src = "/img/clear_input.svg" alt="Очистка поска" />:""}
            </div>
      
      )
}


export default Search;