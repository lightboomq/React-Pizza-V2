import  "./burgerMenu.scss"
import React from "react";


function BurgerMenu ({categoryProps,onChangeCategoryProps,closeBurgerMenuProps}) {

      const arrayСategory = ['Все','Мясные','Гриль','Острые','Закрытые'];
      const iconBurger=(indexArrayCategories)=>{
            onChangeCategoryProps(indexArrayCategories)
            closeBurgerMenuProps(false)
      }
      return(
      <div className = "burger_menu"> 
            <div>              
                 <ul>
                        {arrayСategory.map((arrayCategoryName,indexArrayCategories)=>(
                              <li onClick={()=>iconBurger(indexArrayCategories)} className = {categoryProps === indexArrayCategories? 'active' : 'buttons'}>
                                    {arrayCategoryName} 
                              </li>             
                        ))}     
                 </ul>  
            </div>   
            <div className="empty_block"></div>
      </div>                 
      )

}
export default BurgerMenu;