// Call the dataTables jQuery plugin
$(document).ready(function() {
        //onready
});


  async function registrarUsuario() {
    let datos = {};

    datos.nombre = document.querySelector("#txtNombre").value;
    datos.apellido = document.getElementById('txtApellido').value;
    datos.email = document.getElementById('txtEmail').value;
    datos.password = document.getElementById('txtPassword').value;


    let repetirPassword =document.getElementById('txtRepetirPassword').value;

   if (repetirPassword != datos.password){

    alert("LA CONTRASEÑA NO COINCIDE")
    return;

   }



    const request = await fetch('api/usuarios', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(datos)
    });
    alert("REGISTRADO CORRECTAMENTE")
    window.location.href = 'login.html'

}


