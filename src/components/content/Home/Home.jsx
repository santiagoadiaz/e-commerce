import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getProductos } from '../../../utils/firebase';
import SubNavbar from "../SubNavbar/SubNavbar"
import Main from "../../layouts/Main/Main";
import "../Home/home.css"

const Home = () => {

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        getProductos().then(productos => {
            const cardProducto = productos.map(producto =>
                <div className="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center flex-column containerCard" key={producto[0]}>
                    <img src={producto[1].img} className="food-size" alt={producto.nombre} />
                    <div>
                        <p className="text-product-one">{producto[1].marca}</p>
                        <p className="text-product-two">{producto[1].nombre}</p>
                        <p className="text-product-three">${producto[1].precio}</p>
                        <Link to={`/producto/${producto[0]}`}><button className='btn btn-food'>VIEW</button></Link>
                    </div>
                </div>
            )
            setProductos(cardProducto)
        })
    }, []);

    return (
        <>
            <SubNavbar />
            <Main />
            <div className="row container-product pb-5 gy-5">
                {productos}
            </div>
        </>
    );
}

export default Home;
