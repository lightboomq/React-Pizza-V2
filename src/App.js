import React from "react";
import {Routes,Route} from "react-router-dom";
import Header from "./Componets/Header/Header.jsx";
import Home from "./Pages/Home.jsx";
import Basket from "./Pages/Basket.jsx"
import NotFound from "./Pages/NotFound.jsx";
import "./main.scss";
import './container.scss';
export const SearchContext = React.createContext();

function App() {
const [searchValue,setSearchValue] = React.useState('');

  return (
    
  <div className="container">
      <SearchContext.Provider value={{searchValue,setSearchValue}}>
      <Header />
      <Routes>
        <Route path = "/" element = {<Home />}/>
        <Route path = "/basket" element = {<Basket/>}/>
        <Route path = "*" element = {<NotFound/>}/>
      </Routes>
    </SearchContext.Provider> 
  </div>
    
   )
  } 


export default App;
