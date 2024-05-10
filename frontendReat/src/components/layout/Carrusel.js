import "../../style/components/layout/carrusel.css";
import imagen from "../../img/fondo_main.jpg";
import imagen2 from "../../img/clases_1.jpg";
import imagen3 from "../../img/lospi.jpg";
const Carrusel = () => {
  return (
    <div className="container w-50 w-lg-75 pb-5">
      <div
        id="carouselExampleSlidesOnly"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={imagen2} class="d-block w-100" alt="..."></img>
          </div>
          <div class="carousel-item">
            <img src={imagen} class="d-block w-100" alt="..."></img>
          </div>
          <div class="carousel-item active">
            <img src={imagen3} class="d-block w-100" alt="..."></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carrusel;
