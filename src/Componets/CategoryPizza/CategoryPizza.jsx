import  "./categoryPizza.scss"
import React from "react";


function CategoryPizza({categoryProps,onChangeCategoryProps,}) {

      const arrayСategory = ['Все','Мясные','Гриль','Острые','Закрытые'];
      
      return(
      <div className = "category-pizza">     
                 <ul className="category-pizza__ul">
                        {arrayСategory.map((arrayCategoryName,indexArrayCategories)=>(
                              <li key={indexArrayCategories} onClick={()=>onChangeCategoryProps(indexArrayCategories)} className = {categoryProps === indexArrayCategories? 'category-pizza__active' : ''}>
                                    {arrayCategoryName} 
                              </li>             
                        ))}     
                 </ul>    
      </div>                 
      )

}
export default CategoryPizza;