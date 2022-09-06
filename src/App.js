import Header from "./Componets/Header/Header.jsx";
import Buttons from './Componets/Buttons/Buttons.jsx';
import Cart_Pizza from  "./Componets/Cart_Pizza/Cart_Pizza.jsx"
import Sort from "./Componets/Sort/Sort.jsx";
import "./main.scss";
import './wrapper.scss';

const arr = [
  {name: "Маргарита", price: "450", imgURL: "/img/cart_1.jpg",size: [23,32,35],typeName:['тонкое', 'традиционное']},
  {name: "Четыре сезона", price: "395", imgURL: "img/cart_2.jpg",size: [33,42,36],typeName:['тонкое', 'традиционное']},
  {name: "Пепперони", price: "675", imgURL: "img/cart_3.jpg",size: [25,42],typeName:['тонкое', 'традиционное']},       
  {name: "Чизбургер-пицца", price: "415", imgURL: "img/cart_4.jpg",size: [63,12],typeName:['тонкое', 'традиционное']},
]

function App() {
  return (
  <div className="wrapper">
    <Header/>
    <div className="buttons_and_sort">
        <Buttons/>
        <Sort/>
    </div>
    <h1>Все пиццы123</h1>
    <div className="main">
      {arr.map((obj) =>(<Cart_Pizza name = {obj.name} price = {obj.price} imgURL = {obj.imgURL} sizes = {obj.size} typeNames={obj.typeName}/>))}
    </div>
  </div>
    
    
  )
      
}

export default App;
