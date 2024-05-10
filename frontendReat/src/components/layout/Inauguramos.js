import "../../style/components/layout/Inauguramos.css";

const Inauguracion = (props) => {
  return (
    <div id="informacion" className="container w-100 pt-5">
      <h1>Centro de Escalada </h1>
      <p className="pt-3">
        {`     ¡Nos complace anunciar la apertura de nuestro nuevo Centro de Escalada !
        Somos un grupo de locos fanaticos que se enamoro de este deporte.
     
        Únite a nosotros para descubrir nuestras instalaciones de vanguardia,
        diseñadas para ofrecer la mejor experiencia tanto para escaladores
        principiantes como avanzados, jovenes y adultos. Una buena forma de
        divertirte , conocer gente copada, y hacer un deporte divertido. En este lugar encontraras acesoramiento,
        entrenamientos y clases personalizadas , y muchas actividades mas!`}
        <br></br>
        <h3 className="pt-3">Te das una vuelta ?</h3>
      </p>
    </div>
  );
};

export default Inauguracion;
