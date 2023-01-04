import { useContext } from "react"

import './cartWidget.css'
import { Bag } from 'react-bootstrap-icons'
import { CarritoContext } from "../../../context/CarritoContext"

const CartWidget = () => {

    const { cartItems } = useContext(CarritoContext)

    return (
        <div className="widget">
            <div className="">
                <Bag className="bag" />
            </div>
            {cartItems === 0
                ?
                <div></div>
                :
                <div className="number">
                    {cartItems}
                </div>}
        </div>
    )
}

export default CartWidget;