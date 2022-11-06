import  "./categoryPizza.scss"
import React from "react";


function CategoryPizza({categoryProps,onChangeCategoryProps,}) {

      const arrayСategory = ['Все','Мясные','Гриль','Острые','Закрытые'];
      
      return(
      <div className = "category_pizza">     
                 <ul className="ul">
                        {arrayСategory.map((arrayCategoryName,indexArrayCategories)=>(
                              <li onClick={()=>onChangeCategoryProps(indexArrayCategories)} className = {categoryProps === indexArrayCategories? 'active' : ''}>
                                    {arrayCategoryName} 
                              </li>             
                        ))}     
                 </ul>    
            <div className="empty_block"></div>
      </div>                 
      )

}
export default CategoryPizza;