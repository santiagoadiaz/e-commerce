import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductos } from '../../../utils/firebase';
import EncabezadoGato from '../../layouts/Encabezado/EncabezadoGato';
import EncabezadoPerro from '../../layouts/Encabezado/EncabezadoPerro';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Categoria = () => {

    const [item, setItem] = useState([]);
    const { id } = useParams()

    useEffect(() => {

        getProductos().then(filtrados => {
            const producto1 = filtrados.filter(productoArray => productoArray[1].category == id)

            const cardProducto = producto1.map(producto =>

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

            setItem(cardProducto)
        })


    }, []);

    if (id == "gatos") {
        return (
            <>
                <Navbar />
                <EncabezadoGato />
                <div className="row container-product pb-5 gy-5">
                    {item}
                </div>
                <Footer />
            </>
        );
    } else {
        return (
            <>
                <Navbar />
                <EncabezadoPerro />
                <div className="row container-product pb-5 gy-5">
                    {item}
                </div>
                <Footer />
            </>
        );
    }
}

export default Categoria;
