import React from "react";
import BurgerMenu from '../Componets/BurgerMenu/BurgerMenu.jsx';
import CartPizza from  "../Componets/CartPizza/CartPizza.jsx";
import Sort from "../Componets/Sort/Sort.jsx";
import Basket from "../Componets/BasketBlock/BasketBlock.jsx";
import axios from "axios";


function Home () {
      const [arrayPizzes,setArrayPizzes] = React.useState([]);

      React.useEffect(()=>{
      axios.get("https://63189c8df6b281877c719a8d.mockapi.io/Items").then(res =>{
      setArrayPizzes(res.data);
      })
      }, []);
  
  const[openBurgerMenu,setOpenBurgerMenu] = React.useState(false);
      return(
            <>
            <div className="buttons_and_sort">
                  <div className="burger_icon">
                        <img onClick={()=>setOpenBurgerMenu(!openBurgerMenu)} src = "/img/BurgerMenuIcon.svg"/>
                        {openBurgerMenu ===true? <BurgerMenu/> : ""}
                  </div>
                  <Sort/>
            </div>

            <div className="main">
            {arrayPizzes.map((obj) =>(<CartPizza key={obj.name} name = {obj.name}  price = {obj.price} imgURL = {obj.imgURL} sizes = {obj.size} typeNames={obj.typeName}/>))}
            </div>
            </>
      )
}

export default Home;

  