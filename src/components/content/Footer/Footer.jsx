import { memo } from 'react';
import '../Footer/footer.css'

const Footer = () => {
    return (
        <>
            {/* footer  */}
            <footer>
                {/* container footer visible */}
                <section className="container-footer ghost">
                    {/* sobre nosotros */}
                    <div className="container-footer-col col">
                        <ul>
                            <li>
                                <h3 className="title-footer">SOBRE NOSOTROS</h3>
                            </li>
                            <li >Nosotros</li>
                            <li className="letras-footer">Quienes somos</li>
                            <li className="letras-footer">Contacto</li>
                        </ul>
                    </div>
                    {/* novedades */}
                    <div className="container-footer-col col">
                        <ul>
                            <li>
                                <h3 className="title-footer row-1">NOVEDADES</h3>
                            </li>
                            <li className="letras-footer">Servicios</li>
                            <li className="letras-footer">Terminos y condiciones</li>
                            <li className="letras-footer">Formas de pago</li>
                            <li className="letras-footer">Envios</li>
                            <li className="letras-footer">Politicas de cambio y devolucion</li>
                        </ul>
                    </div>
                    {/* redes */}
                    <div className="container-footer-col col">
                        <ul>
                            <li>
                                <h3 className="title-footer row-1">REDES</h3>
                            </li>
                        </ul>
                    </div>
                </section>
                {/* divider */}
                <div className="divider ghost" />
                {/* todos los derechos */}
                <div className="d-flex justify-content-center ghost">
                    <p className="dr-footer">
                        Todos los derechos reservados - Santiago Diaz.
                    </p>
                </div>
                {/* Display none */}
                <section className="ghost-pages">
                    {/* sobre nosotros */}
                    <div className="dropdown">
                        <button className="btn dropdown-toggle m-3" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            SOBRE NOSOTROS
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li className="dropdown-item letras-footer">Nosotros</li>
                            <li className="dropdown-item letras-footer">Quienes somos</li>
                            <li className="dropdown-item letras-footer">Contacto</li>
                        </ul>
                    </div>
                    {/* novedades */}
                    <div className="dropdown">
                        <button className="btn dropdown-toggle ms-3" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            NOVEDADES
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li className="dropdown-item letras-footer">Servicios</li>
                            <li className="dropdown-item letras-footer">Terminos y condiciones</li>
                            <li className="dropdown-item letras-footer">Formas de pago</li>
                            <li className="dropdown-item letras-footer">Envios</li>
                            <li className="dropdown-item letras-footer">Politicas de cambio y
                                devolucion</li>
                        </ul>
                    </div>
                    {/* divider */}
                    <div className="divider-mobile" />
                    {/* todos los derechos */}
                    <div className="d-flex justify-content-center">
                        <p className="dr-footer-mobile">
                            Todos los derechos reservados - Santiago Diaz.
                        </p>
                    </div>
                </section>
            </footer>
        </>
    );
}

export default memo(Footer);
