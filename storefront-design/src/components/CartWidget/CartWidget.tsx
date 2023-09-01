import {FunctionComponent} from 'react'
import shoppingCart from '../../assets/shopping-cart.svg'
import classes from './cart-widget.module.scss'

export const CartWidget: FunctionComponent = () => {
    return (
        <button className={classes.container}>
            <img src={shoppingCart} alt="Go To Cart" className={classes.shoppingCart}/>
        </button>
    )
}