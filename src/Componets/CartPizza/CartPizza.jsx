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
      <div className="cart_pizza_block">   
              <div className="сart_pizza">
                  <img width={235} height={235} src = {imgURLProps} alt=""/> 
                   <h3>{nameProps}</h3> 
                  <div className="cart_selector">
                        <ul>
                              {typeNameProps.map((typeName,index) => <li onClick ={()=>onClickButtonName(index)} className={activeIndexName===index? 'active' : 'button_1'}>{typeName}</li>)}                
                        </ul>

                        <ul>
                              {sizeProps.map((size,index)=><li onClick={()=>onClickButtonSize(index)} className={activeIndexSize===index? 'active' : "button_1"}>{size}</li>)}
                        </ul>
                  </div>
                  <div className="priceAndAdd">
                        <h4>от: <span>{priceProps} ₽</span></h4>
                        <button onClick = {buttonAdd} className="Add">
                              <img width = {12} height = {12} src = "/img/plus-add-cart-button.svg"/>
                              Добавить <i>{pizzaCounter}</i>    
                        </button>
                  </div>
            </div>
      </div> 
      )

}
export default CartPizza;