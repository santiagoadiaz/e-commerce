import React, { useContext, useEffect, useState } from "react";
import { CarritoContext } from "../../../context/CarritoContext";
import { Link } from "react-router-dom";

const Carrito = () => {

    const { carrito, quitarProducto, vaciarCarrito } = useContext(CarritoContext)

    const [carritoLocal, setCarritoLocal] = useState([]);

    useEffect(() => {
        const prodMostrar = carrito.map(producto =>
            <div className="list-group p-5" key={producto.id}>
                <div className='cart-group mx-2 mt-4'>
                    <img src={`${producto.img}`} className="img-cart" alt={producto.nombre} />
                    <p className="text-product-two mb-auto text-center mx-auto mt-auto">{producto.cantidad} x {producto.nombre} - ${producto.precio} </p>
                    <button className="btn btn-height" onClick={() => quitarProducto(producto)}>X</button>
                    <p>Subtotal: ${producto.precio * producto.cantidad}</p>
                </div>
            </div>
        )
        setCarritoLocal(prodMostrar)
    }, [carrito]);

    if (carrito.length !== 0) {
        return (
            <>
                {carritoLocal}
                < div className="text-center" >
                    <Link to={"/checkout"}><button onClick={() => vaciarCarrito(carrito)} className="btn btn-dark mb-5">Comprar</button></Link>
                </div >
            </>
        );
    } else {
        return (
            <>
                <div className="cart-vacio">
                    <h1>Carrito vacio</h1>
                    <Link to={"/"}> <button className="btn-dark btn">Volver al Home</button></Link>
                </div>
            </>
        );
    }
}

export default Carrito;
