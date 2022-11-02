import { Link } from "react-router-dom";

const Checkout = () => {

    return (
        <>
            <div className="cart-vacio">
                <h1>Gracias por tu compra!</h1>
                <Link to={"/"}> <button className="btn-dark btn">Volver al Home</button></Link>
            </div>
        </>
    );
}

export default Checkout;
