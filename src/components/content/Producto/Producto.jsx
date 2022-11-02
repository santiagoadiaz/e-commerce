import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProducto } from '../../../utils/firebase';
import DetalleProducto from '../DetalleProducto/DetalleProducto';

const Producto = () => {

    const [producto, setProducto] = useState([]);
    const { id } = useParams()

    useEffect(() => {
        getProducto(id).then(prod => {
            setProducto(prod)
        })
    }, [producto]);

    if (producto.length !== 0) {
        return (
            <div className="card mx-auto mb-5 mt-5" style={{ maxWidth: '540px' }}>
                <DetalleProducto producto={producto} />
            </div>
        );
    }
}



export default Producto;
