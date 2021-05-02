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
       fetch('http://localhost:5050/InfoD', {
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

       var z = document.querySelector('#esp')
       z.value = response.especialidad

       var t = document.querySelector('#tel')
       t.value = response.telefono

       })  
}

function modificarDoctor(){
    let muser = document.getElementById("muss");
    let nnombre = document.getElementById("uss");
    let napellido = document.getElementById("apef");
    let nfecha = document.getElementById("fech");
    let nsexo = document.getElementById("sex")
    let nuser = document.getElementById("nomf")
    let npass = document.getElementById("pss")
    let esp = document.getElementById("esp")
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
    else if(esp.value==''){
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
      "especialidad":"${esp.value}",
      "telefono":"${ntel.value}"
    }`
  
    fetch('http://localhost:5050/doctor/'+muser.value, {
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


//citas pendientes
function CargarSol(){
   fetch('http://localhost:5050/obtenercita').then(res => res.json())
   .catch(err => {
   console.error('Error:', err)
   })
   .then(response =>{
   console.log(response)
   for(var i in response)
   {
       console.log(response[i])
       var tabla = document.querySelector("#tablacita")
       tabla.innerHTML +=`
       <tr>
           <td>${response[i].fecha} </td>
           <td>${response[i].hora} </td>
           <td>${response[i].motivo} </td>
           <td> <button value="${i}" onclick="Aceptar(this)" type="button" class="btn btn-primary align-self-center">Aceptar</button></td>
           <td><button value="${i}" onclick="Rechazar(this)" type="button" class="btn btn-primary align-self-center">Rechazar</button></td>
        </tr>
        `
   }
    }
    )}

function Aceptar(boton){     
    var pos = boton.value  
    var objeto = {
            'pos': pos
        }
        console.log(objeto)
        fetch('http://localhost:5050/AceptarCita', {
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
            console.log(response);
            console.log(response.message)
            if(response.message == "Failed"){
                alert(response.reason)
            }else{
                alert(response.reason)
               location.href="visualizar_pendiente.html"
            }
           }) 
}

function Rechazar(boton){     
    var pos = boton.value  
    var objeto = {
        'pos': pos
    }
    console.log(objeto)
    fetch('http://localhost:5050/RechazarCita', {
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
        console.log(response);
        console.log(response.message)
        if(response.message == "Failed"){
            alert(response.reason)
        }else{
            alert(response.reason)
            location.href="visualizar_pendiente.html"
        }
    }) 
}

function MostrarAceptada(){
    fetch('http://localhost:5050/aceptada').then(res => res.json())
    .catch(err => {
        console.error('Error:', err)
    })
    .then(response =>{
    console.log(response)
    var tabla = document.querySelector("#tablacitaA")
    tabla.innerHTML =``
    for(var i in response){
        console.log(response[i])
        tabla.innerHTML +=`
        <tr>
        <td>${response[i].fecha} </td>
        <td>${response[i].hora} </td>
        <td>${response[i].motivo} </td>
        </tr>
         
          `
     }
    })
}

function generatePDF(){
    let fecha = document.getElementById("ff");
    let nombre = document.getElementById("np");
    let padecimiento = document.getElementById("pd");
    let descripcion = document.getElementById("des");

    if(fecha.value==''){
        alert('Debe llenar todos los campos')
        return
    }
    else if(nombre.value==''){
        alert('Debe llenar todos los campos')
        return
    }
    else if(padecimiento.value==''){
        alert('Debe llenar todos los campos')
        return
    }
    else if(descripcion.value==''){
        alert('Debe llenar todos los campos')
        return
    }

    const element=document.getElementById("receta");
    html2pdf().from(element).set({
          margin: 1,
          filename: 'receta medica.pdf',
          html2canvas: { scale: 2 },
          jsPDF: {orientation: 'portrait', unit: 'in', format: 'letter', compressPDF: true}
        })
    .save();
}