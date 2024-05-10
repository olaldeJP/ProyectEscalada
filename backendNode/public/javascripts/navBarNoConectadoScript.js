const formDivCreate = document.querySelector("#divFormCreate");
const mainFormCreate = document.querySelector("#formMainCreate");
const formDivLogin = document.querySelector("#divFormLogin");
const mainFormLogin = document.querySelector("#formMainLogin");
const checkCreate = document.querySelector("#checkCreate");
const checkLogin = document.querySelector("#checkLogin");
const botonLog = document.querySelector("#buttonLogin");
const botonCreate = document.querySelector("#buttonRegister");

checkCreate.addEventListener("change", () => {
  if (checkCreate.checked) {
    if (checkLogin.checked) {
      ocultarFormLogin();
      checkLogin.checked = false;
    }
    mostrarFromCreate();
  } else {
    ocultarFormCreate();
  }
});

checkLogin.addEventListener("change", () => {
  if (checkLogin.checked) {
    if (checkCreate.checked) {
      checkCreate.checked = false;
      ocultarFormCreate();
    }
    mostrarFormLogin();
  } else {
    ocultarFormLogin();
  }
});

botonLog.addEventListener("click", async (event) => {
  event.preventDefault();
  try {
    const formData = new FormData();
    formData.append("email", document.querySelector("#emailLogin").value);
    formData.append("password", document.querySelector("#passwordLogin").value);

    const response = await fetch("http://localhost:8080/api/sesion/login", {
      method: "POST",
      body: formData,
    });
    const responseData = await response.json();
    if (responseData.status === "success") {
      alert("Te Logeaste Satisfactoriamente ");
      window.location.href = "http://localhost:3000/";
    } else {
      alert(responseData.message);
    }
  } catch (error) {
    console.error("Error:", error);
  }
});

botonCreate.addEventListener("click", async (event) => {
  event.preventDefault();
  const formData = new FormData();
  formData.append("email", document.querySelector("#emailCreate").value);
  formData.append("name", document.querySelector("#nombreCreate").value);
  formData.append("password", document.querySelector("#passwordCreate").value);
  try {
    const response = await fetch("http://localhost:8080/api/usuarios/", {
      method: "POST",
      body: formData,
    });
    if (response.status === 201) {
      alert("Cuenta Creada Exitosamente, Chequea tu bandeja de entrada! ");
      window.location.href = "http://localhost:3000/";
    }
  } catch (error) {
    console.error("Error:", error);
  }
});

async function mostrarFromCreate() {
  formDivCreate.style.animationName = "mostrarDivForm";
  formDivCreate.style.animationDuration = "1s";
  formDivCreate.style.animationFillMode = "forwards";
  mainFormCreate.style.animationName = "mostrarForm";
  mainFormCreate.style.animationDuration = "1s";
  mainFormCreate.style.animationFillMode = "forwards";
}

async function ocultarFormCreate() {
  formDivCreate.style.animationName = "ocultarDivForm";
  mainFormCreate.style.animationName = "ocultarForm";
}

async function mostrarFormLogin() {
  formDivLogin.style.animationName = "mostrarDivForm";
  formDivLogin.style.animationDuration = "1s";
  formDivLogin.style.animationFillMode = "forwards";
  mainFormLogin.style.animationName = "mostrarForm";
  mainFormLogin.style.animationDuration = "1s";
  mainFormLogin.style.animationFillMode = "forwards";
}
async function ocultarFormLogin() {
  formDivLogin.style.animationName = "ocultarDivForm";
  mainFormLogin.style.animationName = "ocultarForm";
}
