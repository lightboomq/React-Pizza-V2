import "./cartPizza.scss";
import React from "react";


function CartPizza({nameProps,priceProps,imgURLProps,sizeProps,typeNameProps}) {

     const [pizzaCounter, setCounter] = React.useState(0);
     const buttonAdd = () =>{
            setCounter(pizzaCounter+1)
      }
      const [activeIndexName,setActiveIndexName] = React.useState(1);
      const [activeIndexSize,setActiveIndexSize] = React.useState(0);      

      const onClickButtonName=(index) => {
            setActiveIndexName(index);
      }
      const onClickButtonSize = (index) => {
            setActiveIndexSize(index);
      }
      
      return(
      <div>   
              <div className="сart-pizza">
                  <img width={235} height={235} src = {imgURLProps} alt=""/> 
                   <h3>{nameProps}</h3> 
                  <div className="сart-pizza__cart-selector">
                        <ul>
                              {typeNameProps.map((typeName,index) => <li key={index} onClick ={()=>onClickButtonName(index)} className={activeIndexName===index? 'active' : 'button_1'}>{typeName}</li>)}                
                        </ul>

                        <ul>
                              {sizeProps.map((size,index)=><li key={index} onClick={()=>onClickButtonSize(index)} className={activeIndexSize===index? 'active' : "button_1"}>{size}</li>)}
                        </ul>
                  </div>
                  <div className="сart-pizza__price-and-add">
                        <h4>от: <span>{priceProps} ₽</span></h4>
                        <button onClick = {buttonAdd} className="сart-pizza__add">
                              <img width = {12} height = {12} src = "/img/plus-add-cart-button.svg"/>
                              Добавить <i>{pizzaCounter}</i>    
                        </button>
                  </div>
            </div>
      </div> 
      )

}
export default CartPizza;