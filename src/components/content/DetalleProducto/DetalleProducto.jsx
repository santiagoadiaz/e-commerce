import React, { useState, useContext } from 'react';
import { CarritoContext } from '../../../context/CarritoContext';
import { Link } from "react-router-dom";

const DetalleProducto = ({ producto }) => {

    const [cantidad, setCantidad] = useState(1);

    const { agregarProducto } = useContext(CarritoContext);



    const cantProducto = (operacion) => {
        if (operacion === "+") {

            if (cantidad < producto[1].stock) {
                setCantidad(cantidad + 1)
            }
        } else {
            if (cantidad > 1) {
                setCantidad(cantidad - 1)
            }
        }
    }

    return (
        <>
            <div className="row p-5 d-flex flex-wrap" key={producto.id}>
                <div className='col p-5'>
                    <img src={`${producto[1].img}`} className="food-size" alt={producto.nombre} />
                </div>
                <div className='col p-5 mx-auto'>
                    <p className="text-product-one">{producto[1].marca}</p>
                    <p className="text-product-two">{producto[1].nombre}</p>
                    <p className="text-product-three">${producto[1].precio}</p>
                    <p className="text-product-three">{cantidad}</p>
                    <button className='btn btn-light' onClick={() => cantProducto("+")}>+</button>
                    <button className='btn btn-dark' onClick={() => cantProducto("-")}>-</button>
                    <Link to={"/carrito"}><button className='btn btn-food' onClick={() => agregarProducto(producto, cantidad)}>BUY</button></Link>
                </div>
            </div>
        </>
    );
}

export default DetalleProducto;
