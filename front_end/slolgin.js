let headers = new Headers()
headers.append('Content-Type', 'application/json');
headers.append('Accept', 'application/json');
headers.append('Access-Control-Allow-Origin', 'http://localhost:5050');
headers.append('Access-Control-Allow-Credentials', 'true');
headers.append('GET', 'POST', 'OPTIONS','PUT','DELETE');

function iniciarsesion(){
    let usuario=document.getElementById("user")
    let password=document.getElementById("pass")

    var username = document.querySelector('#user').value
    var pass = document.querySelector('#pass').value

    fetch(`http://localhost:5050/login/${usuario.value}/${password.value}`)
    .then(response => response.json())
    .then(data => {
        console.log(data.nombre)
        if(data.nombre=="false"){

            fetch(`http://localhost:5050/loginP/${usuario.value}/${password.value}`)
            .then(response => response.json())
            .then(data => {
                console.log(data.nombre)
                if(data.nombre=="false"){
                    
                    fetch(`http://localhost:5050/loginD/${usuario.value}/${password.value}`)
                    .then(response => response.json())
                    .then(data => {
                        console.log(data.nombre)
                        if(data.nombre=="false"){
                            
                            fetch(`http://localhost:5050/loginE/${usuario.value}/${password.value}`)
                            .then(response => response.json())
                            .then(data => {
                                console.log(data.nombre)
                                if(data.nombre=="false"){
                                    alert('Credenciales incorrectas')
                                }else{
                                    alert(`Bienvenido ${data.nombre}`)
                                    window.location.href='../front_end/enfermera/index.html'
                                }
                            })
                            password.value='';
                            usuario.value='';

                        }else{
                            alert(`Bienvenido ${data.nombre}`)
                            window.location.href='../front_end/doctor/index.html'
                        }
                    })
                }else{
                    alert(`Bienvenido ${data.nombre}`)
                    sessionStorage.setItem("usuario",username)
                    window.location.href='../front_end/paciente/index.html'
                }
            })
            
        }else{
            alert(`Bienvenido ${data.nombre}`)
            window.location.href='../front_end/admin/index.html'
        }
    })
}