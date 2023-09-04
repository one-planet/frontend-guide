import {FunctionComponent} from 'react'
import logo from '/logo.svg'
// import {CartWidget} from '../CartWidget'
import classes from './header.module.scss'
import shoppingCart from '../../assets/shopping-cart.svg'


export const Header: FunctionComponent = () => {
    return (
        <header className={classes.header}>
            <div>
                <img src={logo} alt="Shopping Cart Application" className={classes.logo}/>
            </div>
            <h3 className={classes.title}>Products</h3>            
            <button className={classes.container}>
                <img src={shoppingCart} alt="Go To Cart" className={classes.shoppingCart}/>
            </button>

        </header>
    )

}