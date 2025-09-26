function getFormvalue(event) {
  event.preventDefault();

  // Selección usando ID.
  const formEl = document.getElementById("form1");

  // Accede a cada input por su name
  const firstName = formEl.elements["fname"].value;
  const lastName = formEl.elements["lname"].value;

  // Imprime primer nombre y apellido en la consola
  console.log("First Name:", firstName);
  console.log("Last Name:", lastName);

}

// El eventlistener
const formEl = document.getElementById("form1");
formEl.addEventListener('submit', getFormvalue);