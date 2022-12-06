import "./basketBlock.scss"
import {Link} from "react-router-dom"
function BasketBlock () {
      return(
            <div className="basket">
                  <div className="basket__content">
                        <h2>🥺<br/> Корзина пустая  </h2>
                        <p>
                              Вероятней всего, вы не заказывали ещё пиццу.<br/>
                              Для того, чтобы заказать пиццу, перейдите на главную страницу.
                        </p>
                        <img src = "/img/sorry-empty-basket.png" width={300} height={255} alt = "Картинка чел с корзиной"/>
                        <Link style={{ textDecoration: 'none' }} to ="/"><button className="basket__comeback-button">Вернуться назад</button></Link>
                  </div>
                 
            </div>
      )
}

export default BasketBlock;