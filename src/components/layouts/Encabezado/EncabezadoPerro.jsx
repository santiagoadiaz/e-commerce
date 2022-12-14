import "../Encabezado/encabezadoPerro.css"
import { Link } from "react-router-dom";

const EncabezadoPerro = () => {
    return (
        <>
            {/* dog encabezado */}
            <div className="container-encabezado-dog">
                <div>
                    <h1>PERROS</h1>
                </div>
                <div className="text-encabezado-dog">
                    <nav>
                        <Link to={"/"}>Inicio</Link>
                    </nav>
                    <p>&gt;Perros</p>
                </div>
            </div>
            {/* alimento salud accesorios */}
            <div className="container-img-asa">
                {/* alimentos */}
                <div className="container-text-asa">
                    <img className="rounded-circle border border-2" src="https://firebasestorage.googleapis.com/v0/b/chunis-petshop-1.appspot.com/o/Imagenes%2Falimentos.webp?alt=media&token=cab38710-301c-4598-b3aa-531f4b3ac39e" alt="alimentos" />
                    <p className="letraPerro">ALIMENTOS</p>
                </div>
                {/* salud */}
                <div className="container-text-asa">
                    <img className="rounded-circle border border-2" src="https://firebasestorage.googleapis.com/v0/b/chunis-petshop-1.appspot.com/o/Imagenes%2Fsalud.webp?alt=media&token=f4330e22-7093-4af9-88fd-a95edeb9d9b7" alt="salud" />
                    <p className="letraPerro">SALUD</p>
                </div>
                {/* accesorios */}
                <div className="container-text-asa">
                    <img className="rounded-circle border border-2" src="https://firebasestorage.googleapis.com/v0/b/chunis-petshop-1.appspot.com/o/Imagenes%2Faccesorios.webp?alt=media&token=0044c519-d44a-4343-ad65-55e8b1784557" alt="accesorios" />
                    <p className="letraPerro">ACCESORIOS</p>
                </div>
            </div>
            {/* filtros */}
            <section className="ps-5 pe-5 d-flex justify-content-center container-filtro">
                {/* tama??o */}
                <div className="dropdown">
                    <button className="btn propiedades-boton dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        TAMA??O
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><p className="dropdown-item">Peque??o</p></li>
                        <li><p className="dropdown-item">Mediano</p></li>
                        <li><p className="dropdown-item">Grande</p></li>
                    </ul>
                </div>
                {/* raza */}
                <div className="dropdown">
                    <button className="btn propiedades-boton dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        RAZA
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><p className="dropdown-item">Boxer</p></li>
                        <li><p className="dropdown-item">Bulldog</p></li>
                        <li><p className="dropdown-item">Caniche</p></li>
                    </ul>
                </div>
                {/* alimento */}
                <div className="dropdown">
                    <button className="btn propiedades-boton dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        ALIMENTO
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><p className="dropdown-item">Secos</p></li>
                        <li><p className="dropdown-item">Humedos</p></li>
                        <li><p className="dropdown-item">Medicados</p></li>
                    </ul>
                </div>
                {/* edad */}
                <div className="dropdown">
                    <button className="btn propiedades-boton dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        EDAD
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><p className="dropdown-item">Cachorro</p></li>
                        <li><p className="dropdown-item">Adulto</p></li>
                        <li><p className="dropdown-item">Adulto Senior</p></li>
                    </ul>
                </div>
                {/* marca */}
                <div className="dropdown">
                    <button className="btn propiedades-boton dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        MARCA
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><p className="dropdown-item">Pro Plan</p></li>
                        <li><p className="dropdown-item">Royal Canin</p></li>
                        <li><p className="dropdown-item"> Eukanuba</p></li>
                    </ul>
                </div>
            </section>
        </>
    );
}

export default EncabezadoPerro;
