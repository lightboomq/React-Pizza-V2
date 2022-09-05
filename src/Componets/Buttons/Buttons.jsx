import  "./buttons.scss"
import React from "react";

function Buttons () {
      const [indexActive,setIndexActive] = React.useState(0);

      const categories = ['Все','Мясные','Вегетарианская','Гриль','Острые','Закрытые'];
      const onClickAdd = (index)=>{
            setIndexActive(index);
      }

      return(  
            <div className="categories">              
                 <ul>
                        {categories.map((all,index)=>(
                              <li onClick={()=>onClickAdd(index)} className = {indexActive == index? 'active' : 'buttons'}>
                              {all}
                              </li>
                        ))}
                        
                 </ul>  
                 
            </div>    
                       
      )

}
export default Buttons;