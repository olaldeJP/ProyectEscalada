const butonActividad = document.querySelector("#butonActividad");

butonActividad.addEventListener("click", async (event) => {
  event.preventDefault();
  var form = document.getElementById("formActividades");
  var data = new FormData(form);
  const response = await fetch("http://localhost:8080/api/actividades", {
    method: "post",
    body: data,
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.status === "success") {
        alert("Se Creo Correctamente La Actividad!");
        window.location.href = "http://localhost:3000/";
      }
    })
    .catch((err) => alert(err));
  console.log(response);
});
const divAct = document.querySelector("#containerMostrarActividades");

document
  .querySelector("#mostrarActividades")
  .addEventListener("click", async (event) => {
    const act = await fetch("http://localhost:8080/api/actividades")
      .then((res) => {
        return res.json();
      })
      .catch((err) => console.log(err));
    if (Array.isArray(act.payload)) {
      divAct.innerHTML = "";
      const fragment = document.createDocumentFragment();
      act.payload.forEach((elem) => {
        const nuevaBox = document.createElement("div");
        nuevaBox.id = elem._id;
        const titulo = document.createElement("h4");
        titulo.textContent = elem.nombre;

        const imagen = document.createElement("img");
        imagen.src = elem.img_path;
        const boton = document.createElement("button");
        boton.id = elem._id;
        boton.innerHTML = "BORRAR ";
        boton.classList.add("submitButton");
        boton.onclick = async function () {
          await fetch(`http://localhost:8080/api/actividades/${this.id}`, {
            method: "delete",
          })
            .then(async (res) => {
              const delet = await res.json();
              if ((delet.status = "success")) {
                alert(" La Actividad se borro correctamente");
                window.location.reload();
              }
            })
            .catch((err) => console.log(err));
        };
        nuevaBox.appendChild(titulo);
        nuevaBox.appendChild(imagen);
        nuevaBox.appendChild(boton);
        nuevaBox.classList.add("boxActividad");
        fragment.appendChild(nuevaBox);
      });
      divAct.appendChild(fragment);
    } else {
      alert("Error En Mostrar Las Actividades");
    }
  });

async function enviarConsulta(event) {
  event.preventDefault();
  const consulta = await fetch(
    "http://localhost:8080/api/usuarios/enviarConsulta",
    {
      method: "post",
      body: new FormData(document.querySelector("#formConsulta")),
    }
  )
    .then(async (res) => {
      return await res.json();
    })
    .then((res) => {
      if (res.status === "success") {
        alert("Consulta Enviada! muchas gracias");
        window.location.href = "http://localhost:3000/";
      } else {
        alert(res.message);
        window.location.href = "http://localhost:3000/";
      }
    })
    .catch((err) => {
      console.err(err);
    });
}
