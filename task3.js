// Seleccion de boton y contenedor para la alerta
const infoButton = document.getElementById("info-btn");
const alertContainer = document.getElementById("alert-container");

// Funcion para buscar y tener la lista de todas las etiquetas a, estas corresponden a lo links en todo el HTML
function showLinkInfo() {
  const allLinks = document.querySelectorAll("a");
  const numberOfLinks = allLinks.length;
  const firstLink = allLinks[0].href;
  const lastLink = allLinks[allLinks.length - 1].href;

  // Alerta de bootstrap, dice número de link, cual es el primer link y cual es el último link
 
  const alert = `
    <div class="alert alert-success alert-dismissible fade show" role="alert">
      <strong>¡Aquí está la información!</strong>
      <ul>
        <li>Número total de enlaces: <strong>${numberOfLinks}</strong></li>
        <li>Primer enlace: <strong>${firstLink}</strong></li>
        <li>Último enlace: <strong>${lastLink}</strong></li>
      </ul>
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  `;

  // innerHTML para poner alerta en el div con id alert-container
  alertContainer.innerHTML = alert;
}

// Evento click del botón
infoButton.addEventListener("click", showLinkInfo);