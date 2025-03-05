document.getElementById("contactoForm").addEventListener("submit", async function (event) {
 event.preventDefault();

 let formData = new FormData(this);

 try {
  let response = await fetch("enviar.php", {
   method: "POST",
   body: formData,
  });

  let result = await response.json();

  if (result.status === "success") {
   document.getElementById("formulario_mensaje_correcto").classList.add("formulario_mensaje_correcto_activo");

   setTimeout(() => {
    document.getElementById("formulario_mensaje_correcto").classList.remove("formulario_mensaje_correcto_activo");
   }, 5000);

   this.reset();
  } else {
   alert("Error: " + result.message);
  }
 } catch (error) {
  document.getElementById("formulario_mensaje").classList.add("formulario_mensaje_error_activo");

  setTimeout(() => {
   document.getElementById("formulario_mensaje").classList.remove("formulario_mensaje_error_activo");
  }, 3000);

  console.error("Error:", error);
 }
});