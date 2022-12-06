import React from 'react';
import './sort.scss';

function Sort ({sortTypeStateProps,onChangeSortProps}){

      const arraySort = [{name:"Популярности", sorting:"rating"},
                         {name:"Цене (самые дешевые)", sorting:"price"},
                         {name:"Цене (самые дорогие)", sorting:"expensivePrice_price"},
                         {name:"Алфавиту", sorting:"name"}
                        ];

      const [open,setOpen]=React.useState(false);
      
      const onClickList = (objectArraySort) => {
            onChangeSortProps(objectArraySort);
            setOpen(false);
     }


      return( 
      <div className="sort-block">
            <h4 >Сортировка по: <span onClick = {()=>setOpen(!open)}>{sortTypeStateProps.name}</span>
                  {open === true? <div className="sort-block__sort-popular">
                        <ul>
                              {arraySort.map((objectArraySort)=>(<li onClick = {()=>onClickList(objectArraySort)} className={sortTypeStateProps.name===objectArraySort.name ? "active" : ""}>{objectArraySort.name}</li>))}
                        </ul>
                  </div> : ""}
            </h4>    
            
      </div>
      )
}


export default Sort;