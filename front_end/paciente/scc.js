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
       fetch('http://35.225.67.35:5050/Info', {
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
  
    fetch('http://35.225.67.35:5050/paciente/'+muser.value, {
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


  fetch('http://35.225.67.35:5050/registroC',
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


//cita aceptada
function infoA (){
    var iniciado = sessionStorage.getItem('usuario')
    var objeto = {
             'user': iniciado
         }
         
          console.log(objeto)
          fetch('http://35.225.67.35:5050/InfoA', {
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
   
          var n = document.querySelector('#acep')
          n.value = response.estado

          })  
   }

   //cita rechazada
function infoR (){
    var iniciado = sessionStorage.getItem('usuario')
    var objeto = {
             'user': iniciado
         }
         
          console.log(objeto)
          fetch('http://35.225.67.35:5050/InfoR', {
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
   
          var n = document.querySelector('#recha')
          n.value = response.estado

          })  
   }

//carrito de compras
let tex3="";
fetch('http://35.225.67.35:5050/obtenermedicamento')
.then(response => response.json())
.then(data =>{
    var w;
    for(w=0;w<data.length;w++){
        tex3+= `<br>
                <div class="col-sm-3 col-md-3 col-lg-3" style="margin-top: 25px;border-style: dotted;">
                <div class="card bg-light" style="width: auto;">
                <img class="card-img-top" src="https://previews.123rf.com/images/iulika1/iulika11711/iulika1171100189/90012427-botella-de-la-medicina-y-pastillas-en-la-ilustraci%C3%B3n-de-vector-de-icono-blanco-y-negro.jpg" alt="Card image cap">
                <div class="card-body">
                    <p class="card-text">Nombre: <input type="button" id="nombre" value="${data[w].nombre}" style="display: none">${data[w].nombre}</p>
                    <p class="card-text">Precio: <input type="button"  id="precio" value="${data[w].precio}" style="display: none">${data[w].precio}</p>
                    <p class="card-text">Descripcion: <input type="button"  id="descripcion" value="${data[w].descripcion}" style="display: none">${data[w].descripcion}</p>
                    <p class="card-text">Cantidad: <input type="button"  id="cantidad" value="" style="display: none">${data[w].cantidad}</p>
                    <button class="btn btn btn-success" onclick="Agregar(this)">Agregar</button>
                </div>
                </div>
                </div>
                <br>`
        console.log(data[w].nombre,'prueba')
    }
    document.getElementById("tarjetaMedicamento").innerHTML = tex3;
});

function Agregar(){


    var nombre = document.getElementById("nombre")
    var precio = document.getElementById("precio")
    var descripcion = document.getElementById("descripcion")
    var cantidad = document.getElementById("cantidad")

    fetch('http://35.225.67.35:5050/agregaCarro',
    {
        method:'POST',
        headers,
        body: `{
                "nombre":"${nombre.value}",
                "precio":"${precio.value}",
                "descripcion":"${descripcion.value}",
                "cantidad":"${cantidad.value}"
                }`
    })
    .then(response => response.json())
    .then(
        result => {
            console.log('Success:', result);
            alert('Se ha registrado correctamente')
          }
    )
    .catch(
        error => {
            console.error('Error:', error);
            alert('Hubo un error creando usuario')
          }
    )

}

let text5=""
text5 = `<table class="table" style="margin=10px">
<thead>
<tr>
<th scope="col"></th>
<th scope="col">Nombre</th>
<th scope="col">Precio</th>
<th scope="col">Descripcion</th>
<th scope="col">Cantidad</th>
</tr>
</thead>
<tbody>`

fetch('http://35.225.67.35:5050/carritoO')
.then(response => response.json())
.then(data =>{
    var i;
    for(i=0;i<data.length;i++){
        text5+= `
                <tr>
                <th scope="row">${i+1}</th>
                <td>${data[i].nombre}</td>
                <td>${data[i].precio}</td>
                <td>${data[i].descripcion}</td>
                <td>${data[i].cantidad}</td>
                </tr>
                `
    }
    text5+=`</tbody>
            </table>`
    document.getElementById("tablapedido").innerHTML = text5;
});

function generatePDF(){
    const element=document.getElementById("pacientePDF");
    html2pdf().from(element).set({
          margin: 1,
          filename: 'pedido de medicamentos.pdf',
          html2canvas: { scale: 2 },
          jsPDF: {orientation: 'portrait', unit: 'in', format: 'letter', compressPDF: true}
        })
    .save();
}