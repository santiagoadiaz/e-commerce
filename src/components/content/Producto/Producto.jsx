import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProducto } from '../../../utils/firebase';
import DetalleProducto from '../DetalleProducto/DetalleProducto';
import LoadingSpiner from '../../layouts/Loading/LoadingSpiner';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Producto = () => {

    const [producto, setProducto] = useState([]);
    const { id } = useParams()

    useEffect(() => {
        getProducto(id).then(prod => {
            setProducto(prod)
        })
    }, [producto]);

    return (
        <div>
            {producto.length === 0
                ?
                <LoadingSpiner />
                : <div>
                    <Navbar />
                    <div className="card mx-auto mb-5 mt-5" style={{ maxWidth: '540px' }}>
                        <DetalleProducto producto={producto} />
                    </div>
                    <Footer />
                </div>}

        </div>
    )
}

export default Producto;
