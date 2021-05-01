let headers = new Headers()
headers.append('Content-Type', 'application/json');
headers.append('Accept', 'application/json');
headers.append('Access-Control-Allow-Origin', 'http://localhost:5050');
headers.append('Access-Control-Allow-Credentials', 'true');
headers.append('GET', 'POST', 'OPTIONS','PUT','DELETE');


function info (){
 var iniciado = sessionStorage.getItem('usuario')
 var objeto = {
          'user': iniciado
      }
      
       console.log(objeto)
       fetch('http://localhost:5050/Info', {
       method: 'POST', 
       body: JSON.stringify(objeto), 
       headers:{
           'Content-Type': 'application/json'
       }
       }).then(res => res.json())
       .catch(err => {
       console.error('Error:', err)
       })
       .then(response =>{
       console.log(response)

       var n = document.querySelector('#nom')
       n.value = response.nombre

       var a = document.querySelector('#ape')
       a.value = response.apellido

        //usuario a modificar
        var mu = document.querySelector('#muss')
        mu.value = response.user

       var nf = document.querySelector('#nomf')
       nf.value = response.nombre

       var af = document.querySelector('#apef')
       af.value = response.apellido

       var f = document.querySelector('#fech')
       f.value = response.fecha
       
       var s = document.querySelector('#sex')
       s.value = response.sexo

       var u = document.querySelector('#uss')
       u.value = response.user

       var c = document.querySelector('#pss')
       c.value = response.password

       var t = document.querySelector('#tel')
       t.value = response.telefono

       })  
}

function modificarPaciente(){
    let muser = document.getElementById("muss");
    let nnombre = document.getElementById("uss");
    let napellido = document.getElementById("apef");
    let nfecha = document.getElementById("fech");
    let nsexo = document.getElementById("sex")
    let nuser = document.getElementById("nomf")
    let npass = document.getElementById("pss")
    let ntel = document.getElementById("tel")
    let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('Accept', 'application/json');
  
       if(nnombre.value==''){
        alert('Debe llenar todos los campos')
        return
    }
    else if(napellido.value==''){
        alert('Debe llenar todos los campos')
        return
    }
    else if(nfecha.value==''){
        alert('Debe llenar todos los campos')
        return
    }
    else if(nsexo.value==''){
        alert('Debe llenar todos los campos')
        return
    }
    else if(nuser.value==''){
        alert('Debe llenar todos los campos')
        return
    }
    else if(npass.value==''){
        alert('Debe llenar todos los campos')
        return
    }

    let reque = `{
      "nombre":"${nnombre.value}",
      "apellido":"${napellido.value}",
      "fecha":"${nfecha.value}",
      "sexo":"${nsexo.value}",
      "user":"${nuser.value}",
      "password":"${npass.value}",
      "telefono":"${ntel.value}"
    }`
  
    fetch('http://localhost:5050/paciente/'+muser.value, {
      method: 'PUT',
      headers,
      body: reque,
    })
    .then(response => response.json())
    .then(result => {
      console.log('Success:', result);
      alert('Datos actualizados')
    })
    .catch(error => {
      console.error('Error:', error);
    });
}


function CrearCita(){
  var user = document.getElementById("muss");
  var fecha = document.getElementById("fechaC");
  var hora = document.getElementById("hora");
  var motivo = document.getElementById("motivo");
  var estado = document.getElementById("estado");

  if(user.value==''){
      alert('Debe llenar todos los campos')
      return
  }
  if(hora.value==''){
      alert('Debe llenar todos los campos')
      return
  }
  else if(motivo.value==''){
      alert('Debe llenar todos los campos')
      return
  }
  else if(fecha.value==''){
      alert('Debe llenar todos los campos')
      return
  }
  else if(estado.value==''){
      alert('Debe llenar todos los campos')
      return
  }


  fetch('http://localhost:5050/registroC',
  {
      method:'POST',
      headers,
      body: `{
              "user":"${user.value}",
              "fecha":"${fecha.value}",
              "hora":"${hora.value}",
              "motivo":"${motivo.value}",
              "estado":"${estado.value}"
              }`
  })
  .then(response => response.json())
  .then(
      result => {
          console.log('Success:', result);
          fecha.value=''
          hora.value=''
          motivo.value=''
          alert('Se ha enviado su cita')
        }
  )
  .catch(
      error => {
          console.error('Error:', error);
          fecha.value=''
          hora.value=''
          motivo.value=''
          alert('Hubo un error creando la cita')
        }
  )

}
