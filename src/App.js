import React from "react";
import {Routes,Route} from "react-router-dom";
import Header from "./Componets/Header/Header.jsx";
import Home from "./Pages/Home.jsx";
import Basket from "./Pages/Basket.jsx"
import NotFound from "./Pages/NotFound.jsx";
import "./main.scss";
import './wrapper.scss';

function App() {

  const [searchValue,setSearchValue] = React.useState('');

  return (
  <div className="wrapper">

      <Header searchValue={searchValue} setSearchValue={setSearchValue}/>
      <Routes>
        <Route path = "/" element = {<Home searchValue={searchValue}/>}/>
        <Route path = "/basket" element = {<Basket/>}/>
        <Route path = "*" element = {<NotFound/>}/>
      </Routes>
     
  </div>
    
    
   )
  } 


export default App;
