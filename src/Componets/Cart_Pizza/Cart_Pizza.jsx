import "./Cart_Pizza.scss";
import React from 'react';


function Cart_Pizza(props) {
     const [pizzaCounter, setCounter] = React.useState(0);
     const buttonAdd = () =>{
            setCounter(pizzaCounter+1)
      }
      const [activeIndexName,setActiveIndexName] = React.useState(1);
      const [activeIndexSize,setActiveIndexSize] = React.useState();      

      const onClickButtonName=(index) => {
            setActiveIndexName(index);
      }
      
      const onClickButtonSize = (index) => {
            setActiveIndexSize(index);
      }
      
      return(
            <div className="Cart_Pizza">
                  <img width={260} height={260} src = {props.imgURL} alt=""/> 
                   <h3>{props.name}</h3> 
                  <div className="Cart_Selector">
                        <ul>
                              {props.typeNames.map((typeName,index) => <li  onClick ={()=>onClickButtonName(index)} className={activeIndexName==index? 'active' : 'button_1'}>{typeName}</li>)}                
                        </ul>


                        <ul>
                              {props.sizes.map((size,index)=><li onClick={()=>onClickButtonSize(index)} className={activeIndexSize==index? 'active' : "button_1"}>{size}</li>)}
                        </ul>
                  </div>
                  <div className="PriceAndAdd">
                        <h4>от: <span>{props.price} ₽</span></h4>
                        <button onClick = {buttonAdd} className="Add">Добавить <i>{pizzaCounter}</i></button>
                  </div>
            </div>
      )

}
export default Cart_Pizza;