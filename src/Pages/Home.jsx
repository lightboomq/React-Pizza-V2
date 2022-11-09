import React from "react";
import CategoryPizza from '../Componets/CategoryPizza/CategoryPizza.jsx';
import CartPizza from  "../Componets/CartPizza/CartPizza.jsx";
import Sort from "../Componets/Sort/Sort.jsx";
import Search from "../Componets/Search/Search.jsx"
import Pagination from "../Componets/Paginastion/Pagination.jsx";

function Home () {
      const [arrayPizzesState,setArrayPizzesState] = React.useState([]);
      const [categoryState,setCategoryState] = React.useState(0);
      const [sortTypeState,setSortTypeState] = React.useState({name:"Популярности",sorting:"rating"});
      const [searchValue,setSearchValue] = React.useState('');
      const category = categoryState > 0 ? `category=${categoryState}`: ''; 
      const sortBy = sortTypeState.sorting.replace('expensivePrice_','');
      const order = sortTypeState.sorting.includes('expensivePrice_') ? 'desc':'asc';
      
      React.useEffect(()=>{
      fetch(`https://63189c8df6b281877c719a8d.mockapi.io/Items?${category}&sortBy=${sortBy}&order=${order}`)
      .then((res)=>res.json())
      .then((arraySort)=>{
            setArrayPizzesState(arraySort);
      });
      },[categoryState,sortTypeState]);

      
      
      return(
      <>

            <div className="category">          
                  <CategoryPizza  categoryProps={categoryState} onChangeCategoryProps={(indexArrayCategories)=> setCategoryState(indexArrayCategories)}/>        
            </div>
            <div className="search_and_sort">
                  <Search searchValueProps={searchValue} setSearchValueProps={setSearchValue}/>
                  <Sort sortTypeStateProps = {sortTypeState} onChangeSortProps = {(objectArraySort)=> setSortTypeState(objectArraySort)}/>
            </div>
            <div className="main">
                  {arrayPizzesState.filter((obj)=>{
                        if(obj.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())){
                              return true;
                              } 
                              return false;
                  }).map((obj) =>(<CartPizza  nameProps = {obj.name}  priceProps = {obj.price} imgURLProps = {obj.imgURL} sizeProps = {obj.size} typeNameProps={obj.typeName}/>))}
            </div>
      </>
      )
}

      export default Home;