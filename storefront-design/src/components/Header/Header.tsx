import {FunctionComponent} from 'react'
import logo from '/logo.svg'
import classes from './header.module.scss'
import shoppingCart from '../../assets/shopping-cart.svg'


export const Header: FunctionComponent = () => {
    return (
        <header className={classes.header}>
            <div>
                <img src={logo} alt="Shopping Cart Application" className={classes.logo}/>
            </div>
            <h3>Products</h3>            
            <button>
                <img src={shoppingCart} alt="Go To Cart" className={classes.logo}/>
            </button>

        </header>
    )

}