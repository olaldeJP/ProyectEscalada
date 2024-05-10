const botonDesc = document.querySelector("#botonDesconectar");
const botonBorrarC = document.querySelector("#botonBorrarCuenta");
const botonCambiarN = document.querySelector("#botonCambiarNombre");
const botonCambiarContra = document.querySelector("#botonCambiarContraseña");
botonDesc.addEventListener("click", async (evnet) => {
  const response = await fetch("http://localhost:8080/api/sesion/logout", {
    method: "DELETE",
  });
  if (response.status === 202) {
    const responseData = await response.json();
    if (!responseData.status === "success") {
      alert("Error Al Crear La Cuenta");
    }
    alert("Nos Veremos La Proxima!");
    window.location.href = "http://localhost:3000/";
  }
});

botonBorrarC.addEventListener("click", async (evnet) => {
  const data = {
    password: prompt("Para Eliminar Tu cuenta Ingrese la contraseña"),
  };

  const response = await fetch(" http://localhost:8080/api/usuarios/", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (response.status === 202) {
    alert("Tu cuenta se borro exitosamente! ");
    window.location.href = "http://localhost:3000/";
  }
});
botonCambiarN.addEventListener("click", async (evnet) => {
  data = {
    name: prompt("Ingrese Nuevo Nombre:"),
  };
  const response = await fetch(" http://localhost:8080/api/usuarios/", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => {
    return res.json();
  });
  if (response.status === "success") {
    alert("El nombre fue cambiado exitosamente");
    window.location.href = "http://localhost:3000/";
  } else {
    alert(response.message);
  }
});

botonCambiarContra.addEventListener("click", () => {});
