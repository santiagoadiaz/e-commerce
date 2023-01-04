import { Link } from 'react-router-dom'
import "../Navbar/navbar.css";
import { memo } from 'react';
import CartWidget from '../Carrito/CartWidget';

const Navbar = () => {

    return (
        <>
            {/* header */}
            <header className='sticky-top'>
                {/* logo + chunis + icons */}
                <nav className="align-items-center container-fluid margin-header w-100 d-flex justify-content-between ghost">
                    {/* carrito */}
                    <label htmlFor="cartfill-menu">
                        <Link to={"/carrito"}><CartWidget /></Link>
                    </label>
                    {/* chunis */}
                    <Link to={"/"}>
                        <h1 className="chunis-header text-decoration-none">CHUNIS</h1>
                        <h3 className="petshop-header text-decoration-none">- PET SHOP -</h3>
                    </Link>
                    {/* icons */}
                    <div className="d-flex">
                        <img src='https://firebasestorage.googleapis.com/v0/b/chunis-petshop-1.appspot.com/o/Imagenes%2Fperson.svg?alt=media&token=7b9eb28c-d0e7-462b-b558-89f899b3d9a6' className="icon-user logo me-3" />
                        <img src='https://firebasestorage.googleapis.com/v0/b/chunis-petshop-1.appspot.com/o/Imagenes%2Ftelephone.svg?alt=media&token=d59f6635-2151-4091-9919-4064eb95c624' className="icon-phone logo me-3" />
                    </div>
                </nav>
                {/* Display none */}
                <nav className="navbar fixed-top ghost-pages">
                    <div className="d-flex justify-content-between ms-4 me-4">
                        {/* carrito */}
                        <Link to={"/carrito"}><CartWidget /></Link>
                        {/* logo chunis */}
                        <Link className="margin-header" to={"/"}><h1 className="chunis-header text-decoration-none d-flex justify-content-center">CHUNIS</h1>
                            <h3 className="petshop-header text-decoration-none d-flex justify-content-center">- PET SHOP -</h3></Link>
                        {/* bar boton */}
                        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                            <span className="navbar-toggler-icon" />
                        </button>
                        {/* off navbar mobile */}
                        <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                            {/* button close */}
                            <div className="d-flex boton-navbar">
                            </div>
                            {/* mobile bar nav */}
                            <div className="offcanvas-body">
                                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                    <li className="nav-item">
                                        <Link to={"/category/perros"} className="nav-link active text-center boton-margin"><a aria-current="page">Perros</a></Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to={"/category/gatos"} className="nav-link active text-center boton-margin"><a aria-current="page">Gatos</a></Link>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active text-center boton-margin" aria-current="page" href="../pages/servicios.html">Servicios</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active text-center boton-margin" aria-current="page" href="../pages/contacto.html">Contacto</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active text-center boton-margin" aria-current="page" href="../pages/nosotros.html">Sobre
                                            nosotros</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}

export default memo(Navbar);