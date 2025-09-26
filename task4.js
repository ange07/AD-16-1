// Selecciona la sección con un id container
const sectionContainer = document.getElementById("container");
console.log("Sección container:", sectionContainer);

// Selecciona todos los elementos de la lista con la clase second
const allSecondItems = document.querySelectorAll(".second");
console.log("Todos los elementos 'second':", allSecondItems);

// Selecciona el li con la clase third que está dentro de ol
const thirdItemInOl = document.querySelector("ol .third");
console.log("El tercer elemento en el 'ol':", thirdItemInOl);

// Pone texto Hello a la sección con el id container, aunque borra lo que estaba antes
//sectionContainer.innerText = "Hello!";

// Añade la clase main al div con la clase footer
const footerDiv = document.querySelector(".footer");
footerDiv.classList.add("main");
console.log("Clases del footer después de añadir main :", footerDiv.classList);

// Quita la clase main del div con la clase footer.
footerDiv.classList.remove("main");
console.log("Clases del footer después de quitar main :", footerDiv.classList);

// Crea un nuevo elemento li
const newLi = document.createElement("li");
console.log("Nuevo elemento li creado:", newLi);

// Al nuevo li se le da el texto four
newLi.innerText = "four";

// Añade el nuevo li a ul
const ulElement = document.querySelector("ul");
ulElement.appendChild(newLi);