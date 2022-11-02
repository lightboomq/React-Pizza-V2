import React from "react";
import BurgerMenu from '../Componets/BurgerMenu/BurgerMenu.jsx';
import CartPizza from  "../Componets/CartPizza/CartPizza.jsx";
import Sort from "../Componets/Sort/Sort.jsx";



function Home () {
      const [arrayPizzesState,setArrayPizzesState] = React.useState([]);
      const [openBurgerMenuState,setOpenBurgerMenuState] = React.useState(false);
      const [categoryState,setCategoryState] = React.useState(0);
      const [sortTypeState,setSortTypeState] = React.useState({name:"Популярности",sorting:"rating"});
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
            <div className="buttons_and_sort">
                  <div className="burger_icon">
                        <img onClick={()=>setOpenBurgerMenuState(!openBurgerMenuState)} src = "/img/BurgerMenuIcon.svg" alt="БургерМеню"/>
                        {openBurgerMenuState===true? <BurgerMenu closeBurgerMenuProps={setOpenBurgerMenuState} categoryProps={categoryState} onChangeCategoryProps={(indexArrayCategories)=> setCategoryState(indexArrayCategories)}/> : ""}
                  </div>
                  <Sort sortTypeStateProps = {sortTypeState} onChangeSortProps = {(objectArraySort)=> setSortTypeState(objectArraySort)}/>
            </div>

            <div className="main">
                  {arrayPizzesState.map((obj) =>(<CartPizza key={obj.name} nameProps = {obj.name}  priceProps = {obj.price} imgURLProps = {obj.imgURL} sizeProps = {obj.size} typeNameProps={obj.typeName}/>))}
            </div>
            </>
      )
}

      export default Home;