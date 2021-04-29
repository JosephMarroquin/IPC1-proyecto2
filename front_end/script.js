function CrearUsuario(){
    var nombre = document.getElementById("nombre");
    var apellido = document.getElementById("apellido");
    var fecha = document.getElementById("fecha");
    var sexo = document.getElementById("sexo");
    var usuario = document.getElementById("nuser");
    var pass = document.getElementById("npass")
    var telefono = document.getElementById("telefono")

    if(nombre.value==''){
        alert('Debe llenar todos los campos')
        return
    }
    else if(apellido.value==''){
        alert('Debe llenar todos los campos')
        return
    }
    else if(fecha.value==''){
        alert('Debe llenar todos los campos')
        return
    }
    else if(usuario.value==''){
        alert('Debe llenar todos los campos')
        return
    }
    else if(pass.value==''){
        alert('Debe llenar todos los campos')
        return
    }
    else if(sexo.value==''){
        alert('Debe llenar todos los campos')
        return
    }
    fetch('http://localhost:5050/registro',
    {
        method:'POST',
        headers,
        body: `{
                "nombre":"${nombre.value}",
                "apellido":"${apellido.value}",
                "fecha":"${fecha.value}",
                "sexo":"${sexo.value}",
                "user":"${usuario.value}",
                "password":"${pass.value}",
                "telefono":"${telefono.value}"
                }`
    })
    .then(response => response.json())
    .then(
        result => {
            console.log('Success:', result);
            nombre.value=''
            apellido.value=''
            fecha.value=''
            usuario.value=''
            pass.value=''
            telefono.value=''
            alert('Se ha registrado correctamente')
          }
    )
    .catch(
        error => {
            console.error('Error:', error);
            nombre.value=''
            apellido.value=''
            usuario.value=''
            pass.value=''
            telefono.value=''
            alert('Hubo un error creando usuario')
          }
    )

}