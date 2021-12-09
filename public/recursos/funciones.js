<script type="text/javascript">

          // Example starter JavaScript for disabling form submissions if there are invalid fields
  (function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
  }var forms = document.querySelectorAll('.needs-validation'){

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          } else {
            RegistrarPersona();
            event.preventDefault()
          }

          form.classList.add('was-validated')
        }, false)
      })
  })()

  function RegistrarPersona(){
    let id = document.querySelector("#txtid").value;
  let nombre = document.querySelector("#txtNombre").value;
  let apellido = document.querySelector("#txtApellido").value;
  let celular = document.querySelector("#txtCelular").value;
  let correo = document.querySelector("#txtCorreo").value;
  let direccion = document.querySelector("#txtDireccion").value;
  let licencia = document.querySelector("#txtLicencia").value;
  let datetime-local = document.querySelector("#txtFechaNacimiento").value;
  let contrasena = document.querySelector("#txtContrasena").value;
  let confirmacion = document.querySelector("#txtConfirmacion").value;
  let tarjeta1 = document.querySelector("#txtTarjeta1").value;
  let tarjeta2 = document.querySelector("#txtTarjeta2").value;


  let url = 'http://localhost:3000/personas';
  let datos = {
    nombre: nombre,
  apellido: apellido,
  celular: celular,
  correo: correo,
  direccion: direccion,
  licencia: licencia,
  fechaNacimiento: fechaNacimiento,
  contrasena: contrasena,
  tarjeta1: tarjeta1,
  tarjeta2: tarjeta2,


  };

  fetch(url, {
    method: 'POST',
  body: JSON.stringify(datos),
  headers: {
    'Content-Type':'application/json'
    }
  }).then(res => res.json())
  .then(mensaje=>{
    console.log(mensaje)
  })




</script>

