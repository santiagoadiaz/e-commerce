import { Link } from "react-router-dom";
import Publicidad from "../Publicidad";
import "../Main/main.css"

const Main = () => {
    return (
        <>
            <section className="d-flex justify-content-center mb-5">
                <div id="carouselExampleIndicators" className="carousel slide mb-5 w-100" data-bs-ride="true">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="size-carousel" src="https://firebasestorage.googleapis.com/v0/b/chunis-petshop-1.appspot.com/o/Imagenes%2Fcarousel.webp?alt=media&token=0cd3accc-5855-4209-99b4-51a75e380e9e" alt="amorchunis" />
                        </div>
                        <div className="carousel-item">
                            <div className="container-iratienda">
                                <button className="iratienda">IR A TIENDA</button>
                            </div>
                            <img className="size-carousel" src="https://firebasestorage.googleapis.com/v0/b/chunis-petshop-1.appspot.com/o/Imagenes%2Fbanner.webp?alt=media&token=8dac0af9-a2c8-4eec-af2b-6d45401532cf" alt="accesorios" />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </section>
            <section className="container-category">
                <div className="container-category-dog">
                    <div className="container-dog">
                        <div className="title-dog">
                            <h2>
                                PERROS
                            </h2>
                        </div>
                        <Link className="text-dog" to={"/category/perros"}>Explora Categoria</Link>
                    </div>
                </div>
                <div className="container-category-cat">
                    <div className="container-cat">
                        <div className="title-cat">
                            <h2>
                                GATOS
                            </h2>
                        </div>
                        <Link className="text-cat" to={"/category/gatos"} >Explora Categoria</Link>
                    </div>
                </div>
            </section>
            <Publicidad />
            <div class="productostext">
                <h2>PRODUCTOS DESTACADOS</h2>
            </div>
        </>
    );
}

export default Main;
