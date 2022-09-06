import React from 'react';
import './sort.scss';

function Sort (){

     
      const [open,setOpen]=React.useState(false);

      


      const arraySort = ["популярности","цене","алфавиту",];
      const [activeIndex,setActiveIndex] = React.useState(0);
      const sortName = arraySort[activeIndex];

     const onClickList = (index) => {
            setActiveIndex(index);
            setOpen(false);
     }


      return( 
      <div className="sort_block">
            <h4 >Сортировка по: <span onClick = {()=>setOpen(!open)}>{sortName}</span>
                   {open === true? <div className="sort_popular">
                        <ul>
                             {arraySort.map((name,index)=>(<li onClick = {()=>onClickList(index)} className={activeIndex ===index ? "active" : ""}>{name}</li>))}
                        </ul>
                   </div> : ""}
            </h4>    
            
      </div>
      )
}


export default Sort;