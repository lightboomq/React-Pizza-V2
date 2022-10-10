import "./basketBlock.scss"
import {Link} from "react-router-dom"
function BasketBlock () {
      return(
            <div className="basket">
                  <div className="basket_content">
                        <h2>Корзина пустая 🥺 </h2>
                        <p>
                              <span>Вероятней всего, вы не заказывали ещё пиццу.</span><br/>
                              Для того, чтобы заказать пиццу, перейди на главную страницу.
                        </p>
                        <img src = "/img/sorry-empty-basket.png" width={300} height={255}/>
                        <Link to ="/"><button className="comeback_button">Вернуться назад</button></Link>
                  </div>
                 
            </div>
      )
}





export default BasketBlock;