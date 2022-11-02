import { initializeApp } from "firebase/app";
import { collection, doc, addDoc, getFirestore, getDocs, getDoc, updateDoc, deleteDoc } from "firebase/firestore"
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: "chunis-petshop-1.firebaseapp.com",
    projectId: "chunis-petshop-1",
    storageBucket: "chunis-petshop-1.appspot.com",
    messagingSenderId: "602095861595",
    appId: "1:602095861595:web:e9d5dde7a015c7e4d6e47e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

const cargarBaseDeDatos = async () => {
    const promise = await fetch("./json/productos.json")
    const productos = await promise.json()
    productos.forEach(async (producto) => {
        await addDoc(collection(db, "productos"), {
            nombre: producto.nombre,
            marca: producto.marca,
            precio: producto.precio,
            stock: producto.stock,
            img: producto.img,
            category: producto.category,
        })
    })
}

const getProducto = async (id) => {
    const producto = await getDoc(doc(db, "productos", id))
    const prod = [producto.id, producto.data()]
    return prod
}

const getProductos = async () => {
    const productos = await getDocs(collection(db, "productos"))
    const food = productos.docs.map(producto => [producto.id, producto.data()])
    return food
}

const updateProducto = async (id, info) => {
    const estado = await updateDoc(doc(db, "productos", id), info)
    return estado
}

const deleteProducto = async (id) => {
    const estado = await deleteDoc(doc(db, "productos", id))
    return estado
}

const createProducto = async (objProd) => {
    const estado = await addDoc(collection(db, "productos"), {
        nombre: objProd.nombre,
        marca: objProd.marca,
        modelo: objProd.modelo,
        categoria: objProd.idCategoria,
        stock: objProd.stock,
        precio: objProd.precio,
        img: objProd.img
    })

    return estado
}

const createOrdenCompra = async (preTotal, nombre, apellido, email, dni, direccion) => {
    const ordenCompra = await addDoc(collection(db, "ordenCompra"), {
        nombre: nombre,
        apellido: apellido,
        email: email,
        dni: dni,
        direccion: direccion,
        precioTotal: preTotal
    })

    return ordenCompra
}

const getOrdenCompra = async (id) => {
    const ordenCompra = await getDoc(doc(db, "ordenCompra", id))
    return ordenCompra
}

export { cargarBaseDeDatos, getProductos, getProducto, updateProducto, deleteProducto, createProducto, createOrdenCompra, getOrdenCompra }
