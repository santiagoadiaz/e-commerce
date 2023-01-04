import React, { createContext, useState, useContext } from 'react';

const CarritoContext = createContext()
export const useCarritoContext = () => useContext(CarritoContext)
const CarritoProvider = (props) => {

    const [carrito, setCarrito] = useState([]);

    const isInCart = (id) => {
        //Retorna producto (V) o undefined (F)
        return carrito.find(producto => producto.id === id)
    }

    const agregarProducto = (producto, cantidad) => {
        if (isInCart(producto.id)) {
            const indice = carrito.findIndex(prod => prod.id === producto.id)
            const aux = [...carrito]
            aux[indice].cant = cantidad
            setCarrito(aux)
        } else {
            const nuevoProducto = {
                ...producto,
                cant: cantidad
            }
            /*const aux = carrito
            aux.push(nuevoProducto)
            setCarrito(aux)*/
            setCarrito([...carrito, nuevoProducto])
        }
    }

    const quitarProducto = (prod) => {
        const aux = carrito
        let indice = aux.findIndex(producto => producto.id === prod.id)

        aux.splice(indice, 1)
        setCarrito(structuredClone(aux))
        console.log(carrito)
    }

    const vaciarCarrito = (carrito) => {
        setCarrito([])
    }

    const getItemQuantity = () => {
        return carrito.reduce((acum, prod) => acum += prod.cant, 0)
    }

    const totalPrice = () => {
        return carrito.reduce((acum, prod) => acum += (prod.cant * prod.precio), 0)
    }

    return (
        <>
            <CarritoContext.Provider value={{ carrito, isInCart, totalPrice, getItemQuantity, agregarProducto, quitarProducto, vaciarCarrito }}>
                {props.children}
            </CarritoContext.Provider>
        </>
    );
}

export { CarritoContext, CarritoProvider };
