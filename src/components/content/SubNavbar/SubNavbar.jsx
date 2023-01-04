import { Link } from 'react-router-dom';
import "../SubNavbar/subnavbar.css"

const SubNavbar = () => {
    return (
        <>
            {/* complementary pages */}
            <section className="container-pages">
                <Link to={"/category/perros"} className="pages">PERROS</Link>
                <Link to={"/category/gatos"} className="pages">GATOS</Link>
                <Link className="pages">SOBRE NOSOTROS</Link>
                <Link className="pages">SERVICIOS</Link>
                <Link className="pages">CONTACTO</Link>
            </section>
        </>
    );
}

export default SubNavbar;
