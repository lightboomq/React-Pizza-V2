import  "./burgerMenu.scss"
import React from "react";


function BurgerMenu () {
      const [indexActive,setIndexActive] = React.useState(0);

      const categories = ['Все','Мясные','Гриль','Острые','Закрытые'];
      const onClickAdd = (index)=>{
            setIndexActive(index);
      }

    

      return(
      <div className = "burger_menu"> 
            <div>              
                 <ul>
                        {categories.map((all,index)=>(
                              <li onClick={()=>onClickAdd(index)} className = {indexActive === index? 'active' : 'buttons'}>
                              {all} <img className="burger_arrow" src="/img/BurgerMenuArrow.svg"/>
                              </li>
                              
                        ))}     
                 </ul>  
            </div>   
            <div className="empty_block"></div>
      </div>                 
      )

}
export default BurgerMenu;