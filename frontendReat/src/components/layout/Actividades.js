import "../../style/components/layout/actividades.css";
import React, { useState, useEffect } from "react";
const Actividades = (props) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const actividades = await fetch(
          "http://localhost:8080/api/actividades"
        ).then(async (res) => {
          return await res.json();
        });
        setData(actividades.payload);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, []);
  console.log(data);
  if (data) {
    return (
      <div>
        <div className=" contenedorActividades pt-5">
          <h1 className="pb-5" id="actividades">
            ACTIVIDADES
          </h1>
          {data.map((item, index) => (
            <div
              id={`item-${index}`}
              key={index}
              className="miDiv"
              style={{ backgroundImage: `url(${item.img_path})` }}
            >
              <div className="contenidoActividades">
                <h1 className="mb-5">{item.nombre}</h1>
                <p className="mt-5">{item.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default Actividades;
