import {FunctionComponent} from 'react'
import logo from '/logo.svg'
import {CartWidget} from '../CartWidget'
import classes from './header.module.scss'

export const Header: FunctionComponent = () => {
    return (
        <header className={classes.header}>
            <div>
                <img src={logo} alt="Shopping Cart Application" className={classes.logo}/>
            </div>
            <div>
                <CartWidget/>
            </div>

        </header>
    )

}