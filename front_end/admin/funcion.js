let headers = new Headers()
headers.append('Content-Type', 'application/json');
headers.append('Accept', 'application/json');
headers.append('Access-Control-Allow-Origin', 'http://localhost:5050');
headers.append('Access-Control-Allow-Credentials', 'true');
headers.append('GET', 'POST', 'OPTIONS','PUT','DELETE');


let text="";
fetch('http://localhost:5050/obtenerpaciente')
.then(response => response.json())
.then(data =>{
    var i;
    for(i=0;i<data.length;i++){
        text+= `<br>
                <div class="col-sm-3 col-md-3 col-lg-3" style="margin-top: 25px;border-style: dotted;">
                <div class="card bg-light" style="width: auto;">
                <img class="card-img-top" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="Card image cap">
                <div class="card-body">
                    <p class="card-text">Nombre: ${data[i].nombre}</p>
                    <p class="card-text">Apellido: ${data[i].apellido}</p>
                    <p class="card-text">Fecha de nacimiento: ${data[i].fecha}</p>
                    <p class="card-text">Sexo: ${data[i].sexo}</p>
                    <p class="card-text">Nombre de usuario: ${data[i].user}</p>
                    <p class="card-text">Contraseña: ${data[i].password}</p>
                    <p class="card-text">Telefono: ${data[i].telefono}</p>
                    <button href="#" class="btn btn btn-danger" onclick="eliminar('${data[i].user}')">Eliminar</button>
                </div>
                </div>
                </div>
                <br>`
        console.log(data[i].nombre,'prueba')
    }
    document.getElementById("tarjetaPaciente").innerHTML = text;
});

let tex1="";
fetch('http://localhost:5050/obtenerdoctor')
.then(response => response.json())
.then(data =>{
    var j;
    for(j=0;j<data.length;j++){
        tex1+= `<br>
                <div class="col-sm-3 col-md-3 col-lg-3" style="margin-top: 25px;border-style: dotted;">
                <div class="card bg-light" style="width: auto;">
                <img class="card-img-top" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="Card image cap">
                <div class="card-body">
                    <p class="card-text">Nombre: ${data[j].nombre}</p>
                    <p class="card-text">Apellido: ${data[j].apellido}</p>
                    <p class="card-text">Fecha de nacimiento: ${data[j].fecha}</p>
                    <p class="card-text">Sexo: ${data[j].sexo}</p>
                    <p class="card-text">Nombre de usuario: ${data[j].user}</p>
                    <p class="card-text">Contraseña: ${data[j].password}</p>
                    <p class="card-text">Especialidad: ${data[j].especialidad}</p>
                    <p class="card-text">Telefono: ${data[j].telefono}</p>
                    <button href="#" class="btn btn btn-danger" onclick="eliminarD('${data[j].user}')">Eliminar</button>
                </div>
                </div>
                </div>
                <br>`
        console.log(data[j].nombre,'prueba')
    }
    document.getElementById("tarjetaDoctor").innerHTML = tex1;
});

let tex2="";
fetch('http://localhost:5050/obtenerenfermera')
.then(response => response.json())
.then(data =>{
    var y;
    for(y=0;y<data.length;y++){
        tex2+= `<br>
                <div class="col-sm-3 col-md-3 col-lg-3" style="margin-top: 25px;border-style: dotted;">
                <div class="card bg-light" style="width: auto;">
                <img class="card-img-top" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="Card image cap">
                <div class="card-body">
                    <p class="card-text">Nombre: ${data[y].nombre}</p>
                    <p class="card-text">Apellido: ${data[y].apellido}</p>
                    <p class="card-text">Fecha de nacimiento: ${data[y].fecha}</p>
                    <p class="card-text">Sexo: ${data[y].sexo}</p>
                    <p class="card-text">Nombre de usuario: ${data[y].user}</p>
                    <p class="card-text">Contraseña: ${data[y].password}</p>
                    <p class="card-text">Telefono: ${data[y].telefono}</p>
                    <button href="#" class="btn btn btn-danger" onclick="eliminarE('${data[y].user}')">Eliminar</button>
                </div>
                </div>
                </div>
                <br>`
        console.log(data[y].nombre,'prueba')
    }
    document.getElementById("tarjetaEnfermera").innerHTML = tex2;
});

let tex3="";
fetch('http://localhost:5050/obtenermedicamento')
.then(response => response.json())
.then(data =>{
    var w;
    for(w=0;w<data.length;w++){
        tex3+= `<br>
                <div class="col-sm-3 col-md-3 col-lg-3" style="margin-top: 25px;border-style: dotted;">
                <div class="card bg-light" style="width: auto;">
                <img class="card-img-top" src="https://previews.123rf.com/images/iulika1/iulika11711/iulika1171100189/90012427-botella-de-la-medicina-y-pastillas-en-la-ilustraci%C3%B3n-de-vector-de-icono-blanco-y-negro.jpg" alt="Card image cap">
                <div class="card-body">
                    <p class="card-text">Nombre: ${data[w].nombre}</p>
                    <p class="card-text">Precio: ${data[w].precio}</p>
                    <p class="card-text">Descripcion: ${data[w].descripcion}</p>
                    <p class="card-text">Cantidad: ${data[w].cantidad}</p>
                    <button href="#" class="btn btn btn-danger" onclick="eliminarM('${data[w].nombre}')">Eliminar</button>
                </div>
                </div>
                </div>
                <br>`
        console.log(data[w].nombre,'prueba')
    }
    document.getElementById("tarjetaMedicamento").innerHTML = tex3;
});

//recargar vista 
function refrescarVista(){
    document.getElementById("tarjetaPaciente").innerHTML = '';
    let text="";
    fetch('http://localhost:5050/obtenerpaciente')
    .then(response => response.json())
    .then(data =>{
        var i;
        for(i=0;i<data.length;i++){
            text+= `<br>
                    <div class="col-sm-3 col-md-3 col-lg-3""  style="margin-top: 25px;float: left;">
                    <div class="card bg-light" style="width: auto;">
                    <img class="card-img-top" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="Card image cap">
                    <div class="card-body">
                        <p class="card-text">Nombre: ${data[i].nombre}</p>
                        <p class="card-text">Apellido: ${data[i].apellido}</p>
                        <p class="card-text">Fecha de nacimiento: ${data[i].fecha}</p>
                        <p class="card-text">Sexo: ${data[i].sexo}</p>
                        <p class="card-text">Nombre de usuario: ${data[i].user}</p>
                        <p class="card-text">Contraseña: ${data[i].password}</p>
                        <p class="card-text">Telefono: ${data[i].telefono}</p>
                        <button href="#" class="btn btn btn-danger" onclick="eliminar('${data[i].user}')">Eliminar</button>
                    </div>
                    </div>
                    </div>
                    <br>`
            console.log(data[i].nombre,'prueba')
        }
        document.getElementById("tarjetaPaciente").innerHTML = text;
    });
  
  
  }

function refrescarVistaD(){
    document.getElementById("tarjetaDoctor").innerHTML = '';
    let text="";
    fetch('http://localhost:5050/obtenerdoctor')
    .then(response => response.json())
    .then(data =>{
        var i;
        for(i=0;i<data.length;i++){
            text+= `<br>
                    <div class="col-sm-3 col-md-3 col-lg-3""  style="margin-top: 25px;float: left;">
                    <div class="card bg-light" style="width: auto;">
                    <img class="card-img-top" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="Card image cap">
                    <div class="card-body">
                        <p class="card-text">Nombre: ${data[i].nombre}</p>
                        <p class="card-text">Apellido: ${data[i].apellido}</p>
                        <p class="card-text">Fecha de nacimiento: ${data[i].fecha}</p>
                        <p class="card-text">Sexo: ${data[i].sexo}</p>
                        <p class="card-text">Nombre de usuario: ${data[i].user}</p>
                        <p class="card-text">Contraseña: ${data[i].password}</p>
                        <p class="card-text">Especialidad: ${data[i].especialidad}</p>
                        <p class="card-text">Telefono: ${data[i].telefono}</p>
                        <button href="#" class="btn btn btn-danger" onclick="eliminarD('${data[i].user}')">Eliminar</button>
                    </div>
                    </div>
                    </div>
                    <br>`
            console.log(data[i].nombre,'prueba')
        }
        document.getElementById("tarjetaDoctor").innerHTML = text;
    });
  
  
  }

function refrescarVistaE(){
    document.getElementById("tarjetaEnfermera").innerHTML = '';
    let text="";
    fetch('http://localhost:5050/obtenerenfermera')
    .then(response => response.json())
    .then(data =>{
        var i;
        for(i=0;i<data.length;i++){
            text+= `<br>
                    <div class="col-sm-3 col-md-3 col-lg-3""  style="margin-top: 25px;float: left;">
                    <div class="card bg-light" style="width: auto;">
                    <img class="card-img-top" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="Card image cap">
                    <div class="card-body">
                        <p class="card-text">Nombre: ${data[i].nombre}</p>
                        <p class="card-text">Apellido: ${data[i].apellido}</p>
                        <p class="card-text">Fecha de nacimiento: ${data[i].fecha}</p>
                        <p class="card-text">Sexo: ${data[i].sexo}</p>
                        <p class="card-text">Nombre de usuario: ${data[i].user}</p>
                        <p class="card-text">Contraseña: ${data[i].password}</p>
                        <p class="card-text">Telefono: ${data[i].telefono}</p>
                        <button href="#" class="btn btn btn-danger" onclick="eliminarE('${data[i].user}')">Eliminar</button>
                    </div>
                    </div>
                    </div>
                    <br>`
            console.log(data[i].nombre,'prueba')
        }
        document.getElementById("tarjetaEnfermera").innerHTML = text;
    });
  
  
  }

  function refrescarVistaM(){
    document.getElementById("tarjetaMedicamento").innerHTML = '';
    let text="";
    fetch('http://localhost:5050/obtenermedicamento')
    .then(response => response.json())
    .then(data =>{
        var i;
        for(i=0;i<data.length;i++){
            text+= `<br>
                    <div class="col-sm-3 col-md-3 col-lg-3""  style="margin-top: 25px;float: left;">
                    <div class="card bg-light" style="width: auto;">
                    <img class="card-img-top" src="https://previews.123rf.com/images/iulika1/iulika11711/iulika1171100189/90012427-botella-de-la-medicina-y-pastillas-en-la-ilustraci%C3%B3n-de-vector-de-icono-blanco-y-negro.jpg" alt="Card image cap">
                    <div class="card-body">
                        <p class="card-text">Nombre: ${data[i].nombre}</p>
                        <p class="card-text">Precio: ${data[i].precio}</p>
                        <p class="card-text">Descripcion: ${data[i].descripcion}</p>
                        <p class="card-text">Cantidad: ${data[i].cantidad}</p>
                        <button href="#" class="btn btn btn-danger" onclick="eliminarM('${data[i].nombre}')">Eliminar</button>
                    </div>
                    </div>
                    </div>
                    <br>`
            console.log(data[i].nombre,'prueba')
        }
        document.getElementById("tarjetaMedicamento").innerHTML = text;
    });
  
  
  }

//eliminar datos paciente
function eliminar(user){
    console.log(user)
    fetch('http://localhost:5050/paciente/'+user,{
        method:'DELETE'
    })
    .then(res => res.text())
    .then(res=> {
        alert('Paciente eliminado correctamente')
        refrescarVista()
    })   
}

function eliminarD(user){
    console.log(user)
    fetch('http://localhost:5050/doctor/'+user,{
        method:'DELETE'
    })
    .then(res => res.text())
    .then(res=> {
        alert('Doctor eliminado correctamente')
        refrescarVistaD()
    })   
}

function eliminarE(user){
    console.log(user)
    fetch('http://localhost:5050/enfermera/'+user,{
        method:'DELETE'
    })
    .then(res => res.text())
    .then(res=> {
        alert('Enfermera eliminada correctamente')
        refrescarVistaE()
    })   
}

function eliminarM(nombre){
    console.log(nombre)
    fetch('http://localhost:5050/medicamento/'+nombre,{
        method:'DELETE'
    })
    .then(res => res.text())
    .then(res=> {
        alert('Medicamento eliminado correctamente')
        refrescarVistaM()
    })   
}

//carga masiva de datos
function cargar(){
    let file = document.getElementById("carga").files[0];
    if (file) {
        let reader = new FileReader();
        reader.readAsText(file, "UTF-8");
        reader.onload = function (evt) {
            let cuerpo = {
                data:evt.target.result
            }

            console.log(JSON.stringify(cuerpo))
            fetch('http://localhost:5050/carga', {
            method: 'POST',
            headers,
            body: JSON.stringify(cuerpo),
            })
            .then(response => response.json())
            .then(result => {
                console.log('Success:', result);
                alert('Carga masiva registrada con exito')
                refrescarVista()
            })
            .catch(error => {
                console.error('Error:', error);
            });

        }
        reader.onerror = function (evt) {
            
        }
    }
}

function cargarD(){
    let file = document.getElementById("cargaD").files[0];
    if (file) {
        let reader = new FileReader();
        reader.readAsText(file, "UTF-8");
        reader.onload = function (evt) {
            let cuerpo = {
                data:evt.target.result
            }

            console.log(JSON.stringify(cuerpo))
            fetch('http://localhost:5050/cargaD', {
            method: 'POST',
            headers,
            body: JSON.stringify(cuerpo),
            })
            .then(response => response.json())
            .then(result => {
                console.log('Success:', result);
                alert('Carga masiva registrada con exito')
                refrescarVistaD()
            })
            .catch(error => {
                console.error('Error:', error);
            });

        }
        reader.onerror = function (evt) {
            
        }
    }
}


function cargarE(){
    let file = document.getElementById("cargaE").files[0];
    if (file) {
        let reader = new FileReader();
        reader.readAsText(file, "UTF-8");
        reader.onload = function (evt) {
            let cuerpo = {
                data:evt.target.result
            }

            console.log(JSON.stringify(cuerpo))
            fetch('http://localhost:5050/cargaE', {
            method: 'POST',
            headers,
            body: JSON.stringify(cuerpo),
            })
            .then(response => response.json())
            .then(result => {
                console.log('Success:', result);
                alert('Carga masiva registrada con exito')
                refrescarVistaE()
            })
            .catch(error => {
                console.error('Error:', error);
            });

        }
        reader.onerror = function (evt) {
            
        }
    }
}

function cargarM(){
    let file = document.getElementById("cargaM").files[0];
    if (file) {
        let reader = new FileReader();
        reader.readAsText(file, "UTF-8");
        reader.onload = function (evt) {
            let cuerpo = {
                data:evt.target.result
            }

            console.log(JSON.stringify(cuerpo))
            fetch('http://localhost:5050/cargaM', {
            method: 'POST',
            headers,
            body: JSON.stringify(cuerpo),
            })
            .then(response => response.json())
            .then(result => {
                console.log('Success:', result);
                alert('Carga masiva registrada con exito')
                refrescarVistaM()
            })
            .catch(error => {
                console.error('Error:', error);
            });

        }
        reader.onerror = function (evt) {
            
        }
    }
}

//modificacion
function modificarPaciente(){
    let muser = document.getElementById("muser");
    let nnombre = document.getElementById("nnombre");
    let napellido = document.getElementById("napellido");
    let nfecha = document.getElementById("nfecha");
    let nsexo = document.getElementById("nsexo")
    let nuser = document.getElementById("nuser")
    let npass = document.getElementById("npass")
    let ntel = document.getElementById("ntel")
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
      alert('Datos del paciente actualizados')
      refrescarVista()
      muser.value=''
      nnombre.value=''
      napellido.value=''
      nfecha.value=''
      nsexo.value=''
      nuser.value=''
      npass.value=''
      ntel.value=''
      
    })
    .catch(error => {
      console.error('Error:', error);
    });
  
  }

function modificarDoctor(){
    let muserD = document.getElementById("muserD");
    let nnombreD = document.getElementById("nnombreD");
    let napellidoD = document.getElementById("napellidoD");
    let nfechaD = document.getElementById("nfechaD");
    let nsexoD = document.getElementById("nsexoD")
    let nuserD = document.getElementById("nuserD")
    let npassD = document.getElementById("npassD")
    let nespecialidadD = document.getElementById("nespecialidadD")
    let ntelD = document.getElementById("ntelD")
    let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('Accept', 'application/json');
  
       if(nnombreD.value==''){
        alert('Debe llenar todos los campos')
        return
    }
    else if(napellidoD.value==''){
        alert('Debe llenar todos los campos')
        return
    }
    else if(nfechaD.value==''){
        alert('Debe llenar todos los campos')
        return
    }
    else if(nsexoD.value==''){
        alert('Debe llenar todos los campos')
        return
    }
    else if(nuserD.value==''){
        alert('Debe llenar todos los campos')
        return
    }
     else if(nespecialidadD.value==''){
        alert('Debe llenar todos los campos')
        return
    }
    else if(npassD.value==''){
        alert('Debe llenar todos los campos')
        return
    }

    let reque = `{
      "nombre":"${nnombreD.value}",
      "apellido":"${napellidoD.value}",
      "fecha":"${nfechaD.value}",
      "sexo":"${nsexoD.value}",
      "user":"${nuserD.value}",
      "password":"${npassD.value}",
      "especialidad":"${nespecialidadD.value}",
      "telefono":"${ntelD.value}"
    }`
  
    fetch('http://localhost:5050/doctor/'+muserD.value, {
      method: 'PUT',
      headers,
      body: reque,
    })
    .then(response => response.json())
    .then(result => {
      console.log('Success:', result);
      alert('Datos del doctor actualizados')
      refrescarVistaD()
      muserD.value=''
      nnombreD.value=''
      napellidoD.value=''
      nfechaD.value=''
      nsexoD.value=''
      nuserD.value=''
      npassD.value=''
      nespecialidadD.value=''
      ntelD.value=''
      
    })
    .catch(error => {
      console.error('Error:', error);
    });
  
  }


function modificarEnfermera(){
    let muserE = document.getElementById("muserE");
    let nnombreE = document.getElementById("nnombreE");
    let napellidoE = document.getElementById("napellidoE");
    let nfechaE = document.getElementById("nfechaE");
    let nsexoE = document.getElementById("nsexoE")
    let nuserE = document.getElementById("nuserE")
    let npassE = document.getElementById("npassE")
    let ntelE = document.getElementById("ntelE")
    let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('Accept', 'application/json');
  
       if(nnombreE.value==''){
        alert('Debe llenar todos los campos')
        return
    }
    else if(napellidoE.value==''){
        alert('Debe llenar todos los campos')
        return
    }
    else if(nfechaE.value==''){
        alert('Debe llenar todos los campos')
        return
    }
    else if(nsexoE.value==''){
        alert('Debe llenar todos los campos')
        return
    }
    else if(nuserE.value==''){
        alert('Debe llenar todos los campos')
        return
    }
    else if(npassE.value==''){
        alert('Debe llenar todos los campos')
        return
    }

    let reque = `{
      "nombre":"${nnombreE.value}",
      "apellido":"${napellidoE.value}",
      "fecha":"${nfechaE.value}",
      "sexo":"${nsexoE.value}",
      "user":"${nuserE.value}",
      "password":"${npassE.value}",
      "telefono":"${ntelE.value}"
    }`
  
    fetch('http://localhost:5050/enfermera/'+muserE.value, {
      method: 'PUT',
      headers,
      body: reque,
    })
    .then(response => response.json())
    .then(result => {
      console.log('Success:', result);
      alert('Datos de la enfermera actualizados')
      refrescarVistaE()
      muserE.value=''
      nnombreE.value=''
      napellidoE.value=''
      nfechaE.value=''
      nsexoE.value=''
      nuserE.value=''
      npassE.value=''
      ntelE.value=''
    })
    .catch(error => {
      console.error('Error:', error);
    });
  
  }

  function modificarMedicamento(){
    let mnombreM = document.getElementById("mnombreM");
    let nnombreM = document.getElementById("nnombreM");
    let nprecioM = document.getElementById("nprecioM");
    let ndescripcionM = document.getElementById("ndescripcionM");
    let ncantidadM = document.getElementById("ncantidadM");
    let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('Accept', 'application/json');
  
       if(nnombreM.value==''){
        alert('Debe llenar todos los campos')
        return
    }
    else if(nprecioM.value==''){
        alert('Debe llenar todos los campos')
        return
    }
    else if(ndescripcionM.value==''){
        alert('Debe llenar todos los campos')
        return
    }
    else if(ncantidadM.value==''){
        alert('Debe llenar todos los campos')
        return
    }

    let reque = `{
      "nombre":"${nnombreM.value}",
      "precio":"${nprecioM.value}",
      "descripcion":"${ndescripcionM.value}",
      "cantidad":"${ncantidadM.value}"
    }`
  
    fetch('http://localhost:5050/medicamento/'+mnombreM.value, {
      method: 'PUT',
      headers,
      body: reque,
    })
    .then(response => response.json())
    .then(result => {
      console.log('Success:', result);
      alert('Datos del medicamento actualizado')
      refrescarVistaM()
      mnombreM.value=''
      nnombreM.value=''
      nprecioM.value=''
      ndescripcionM.value=''
      ncantidadM.value=''
    })
    .catch(error => {
      console.error('Error:', error);
    });
  
  }



//reportes pdf
let text2=""
text2 = `<table class="table" style="margin=10px">
<thead>
<tr>
<th scope="col"></th>
<th scope="col">Nombre</th>
<th scope="col">Apellido</th>
<th scope="col">Fecha</th>
<th scope="col">Sexo</th>
<th scope="col">Usuario</th>
<th scope="col">Contraseña</th>
<th scope="col">Telefono</th>
</tr>
</thead>
<tbody>`

fetch('http://localhost:5050/obtenerpaciente')
.then(response => response.json())
.then(data =>{
    var i;
    for(i=0;i<data.length;i++){
        text2+= `
                <tr>
                <th scope="row">${i+1}</th>
                <td>${data[i].nombre}</td>
                <td>${data[i].apellido}</td>
                <td>${data[i].fecha}</td>
                <td>${data[i].sexo}</td>
                <td>${data[i].user}</td>
                <td>${data[i].password}</td>
                <td>${data[i].telefono}</td>
                </tr>
                `
    }
    text2+=`</tbody>
            </table>`
    document.getElementById("tablausers").innerHTML = text2;
});


let text3=""
text3 = `<table class="table" style="margin=10px">
<thead>
<tr>
<th scope="col"></th>
<th scope="col">Nombre</th>
<th scope="col">Apellido</th>
<th scope="col">Fecha</th>
<th scope="col">Sexo</th>
<th scope="col">Usuario</th>
<th scope="col">Contraseña</th>
<th scope="col">Especialidad</th>
<th scope="col">Telefono</th>
</tr>
</thead>
<tbody>`

fetch('http://localhost:5050/obtenerdoctor')
.then(response => response.json())
.then(data =>{
    var i;
    for(i=0;i<data.length;i++){
        text3+= `
                <tr>
                <th scope="row">${i+1}</th>
                <td>${data[i].nombre}</td>
                <td>${data[i].apellido}</td>
                <td>${data[i].fecha}</td>
                <td>${data[i].sexo}</td>
                <td>${data[i].user}</td>
                <td>${data[i].password}</td>
                <td>${data[i].especialidad}</td>
                <td>${data[i].telefono}</td>
                </tr>
                `
    }
    text3+=`</tbody>
            </table>`
    document.getElementById("tabladoctores").innerHTML = text3;
});

let text4=""
text4 = `<table class="table" style="margin=10px">
<thead>
<tr>
<th scope="col"></th>
<th scope="col">Nombre</th>
<th scope="col">Apellido</th>
<th scope="col">Fecha</th>
<th scope="col">Sexo</th>
<th scope="col">Usuario</th>
<th scope="col">Contraseña</th>
<th scope="col">Telefono</th>
</tr>
</thead>
<tbody>`

fetch('http://localhost:5050/obtenerenfermera')
.then(response => response.json())
.then(data =>{
    var i;
    for(i=0;i<data.length;i++){
        text4+= `
                <tr>
                <th scope="row">${i+1}</th>
                <td>${data[i].nombre}</td>
                <td>${data[i].apellido}</td>
                <td>${data[i].fecha}</td>
                <td>${data[i].sexo}</td>
                <td>${data[i].user}</td>
                <td>${data[i].password}</td>
                <td>${data[i].telefono}</td>
                </tr>
                `
    }
    text4+=`</tbody>
            </table>`
    document.getElementById("tablaenfermera").innerHTML = text4;
});

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

fetch('http://localhost:5050/obtenermedicamento')
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
    document.getElementById("tablamedicamento").innerHTML = text5;
});


function generatePDF(){
    const element=document.getElementById("pacientePDF");
    html2pdf().from(element).set({
          margin: 1,
          filename: 'reporte pacientes.pdf',
          html2canvas: { scale: 2 },
          jsPDF: {orientation: 'portrait', unit: 'in', format: 'letter', compressPDF: true}
        })
    .save();
}

function generatePDFD(){
    const element=document.getElementById("doctorPDF");
    html2pdf().from(element).set({
          margin: 1,
          filename: 'reporte doctores.pdf',
          html2canvas: { scale: 2 },
          jsPDF: {orientation: 'portrait', unit: 'in', format: 'letter', compressPDF: true}
        })
    .save();
}

function generatePDFE(){
    const element=document.getElementById("enfermeraPDF");
    html2pdf().from(element).set({
          margin: 1,
          filename: 'reporte enfermeras.pdf',
          html2canvas: { scale: 2 },
          jsPDF: {orientation: 'portrait', unit: 'in', format: 'letter', compressPDF: true}
        })
    .save();
}

function generatePDFM(){
    const element=document.getElementById("medicamentoPDF");
    html2pdf().from(element).set({
          margin: 1,
          filename: 'reporte medicamentos.pdf',
          html2canvas: { scale: 2 },
          jsPDF: {orientation: 'portrait', unit: 'in', format: 'letter', compressPDF: true}
        })
    .save();
}