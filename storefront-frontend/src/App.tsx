import {Header} from './components/Header'
import { Products } from './components/Products'
import { useState } from 'react'

function App(){
    const [showShoppingCart, setShowShoppingCart] = useState(false);
    return(
        <>
        <Header />
        {!showShoppingCart && <Products /> || <p>Shopping Cart</p>}
        </>
    )
}
export default App