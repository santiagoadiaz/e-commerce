import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../styles/App.css"
import "../styles/responsive.css"
import Navbar from './content/Navbar/Navbar';
import Footer from './content/Footer/Footer';
import Home from './content/Home/Home';
import Carrito from "./content/Carrito/Carrito";
import Producto from "./content/Producto/Producto";
import Categoria from "./content/Categoria/Categoria";
import Checkout from "./content/Checkout/Checkout";

const App = () => {
  return (
    <>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/producto/:id" element={<Producto />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/category/:id" element={<Categoria />} />
          <Route path="*" element={<div className="cart-vacio"><h1>Error 404</h1></div>
          } />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;