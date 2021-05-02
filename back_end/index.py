#Importaciones de Flask

from flask import Flask,request,jsonify
from flask_cors import CORS
from control import control
from paciente import Paciente
from doctor import Doctor
from enfermera import Enfermera
from medicamento import Medicamento
from cita import Cita
from aceptada import Aceptada
from rechazada import Rechazada
from carrito import Carrito
import json,re

#Crear la app

app=Flask(__name__)
app.config["DEBUG"]=True

CORS(app)

control=control()

paciente=[]
cita=[]
aceptada=[]
rechazada=[]
enfermera=[]
medicamento=[]
carrito=[]

#Registro Paciente
def crearPaciente(nombre,apellido,fecha,sexo,user,password,telefono):
    paciente.append(Paciente(nombre,apellido,fecha,sexo,user,password,telefono))

#Solicitud de cita
def crearCita(user,fecha,hora,motivo,estado):
    cita.append(Cita(user,fecha,hora,motivo,estado))

#Crear enfermera
def crearEnfermera(nombre,apellido,fecha,sexo,user,password,telefono):
    enfermera.append(Enfermera(nombre,apellido,fecha,sexo,user,password,telefono))

#Crear medicamento
def crearMedicamento(nombre,precio,descripcion,cantidad):
    medicamento.append(Medicamento(nombre,precio,descripcion,cantidad))

#Crear carro
def crearCarro(nombre,precio,descripcion,cantidad):
    carrito.append(Carrito(nombre,precio,descripcion,cantidad))

#mostrar datos
def obtener_paciente():
    return json.dumps([ob.__dict__ for ob in paciente])

def obtener_cita():
    return json.dumps([ob.__dict__ for ob in cita])

def obtener_enfermera():
    return json.dumps([ob.__dict__ for ob in enfermera])

def obtener_medicamento():
    return json.dumps([ob.__dict__ for ob in medicamento])

def obtener_carro():
    return json.dumps([ob.__dict__ for ob in carrito])

#actualizar datos
def actualizar_paciente(user,user_nuevo,apellido,fecha,sexo,nombre,password,telefono):
    for x in paciente:
        if x.user==user:
            paciente[paciente.index(x)]=Paciente(nombre,apellido,fecha,sexo,user_nuevo,password,telefono)
            return True
    return False 

def actualizar_cita(user,user_nuevo,fecha,hora,motivo,estado):
    for x in cita:
        if x.user==user:
            cita[cita.index(x)]=Cita(user_nuevo,fecha,hora,motivo,estado)
            return True
    return False 

def actualizar_enfermera(user,user_nuevo,apellido,fecha,sexo,nombre,password,telefono):
    for x in enfermera:
        if x.user==user:
            enfermera[enfermera.index(x)]=Enfermera(nombre,apellido,fecha,sexo,user_nuevo,password,telefono)
            return True
    return False 

def actualizar_medicamento(nombre,nombre_nuevo,precio,descripcion,cantidad):
    for x in medicamento:
        if x.nombre==nombre:
            medicamento[medicamento.index(x)]=Medicamento(nombre_nuevo,precio,descripcion,cantidad)
            return True
    return False 

#elilminar datos
def eliminar_paciente(user):
    for x in paciente:
        if x.user==user:
            paciente.remove(x)
            return True
    return False 

def eliminar_cita(user):
    for x in cita:
        if x.user==user:
            cita.remove(x)
            return True
    return False 

def eliminar_enfermera(user):
    for x in enfermera:
        if x.user==user:
            enfermera.remove(x)
            return True
    return False 

def eliminar_medicamento(nombre):
    for x in medicamento:
        if x.nombre==nombre:
            medicamento.remove(x)
            return True
    return False 

#login
def iniciar_sesionP(user,password):
    for x in paciente:
        if x.password==password and x.user==user:
            return json.dumps(x.__dict__)
    return '{"nombre":"false"}' 

def iniciar_sesionE(user,password):
    for x in enfermera:
        if x.password==password and x.user==user:
            return json.dumps(x.__dict__)
    return '{"nombre":"false"}' 

#carga masiva
def cargamasiva(data):
    hola = re.split('\n',data)
    i=1
    while i < len(hola):
        texto = re.split(',',hola[i])
        crearPaciente(texto[0],texto[1],texto[2],texto[3],texto[4],texto[5],texto[6])
        i = i+1 

def cargamasivaE(data):
    hola = re.split('\n',data)
    i=1
    while i < len(hola):
        texto = re.split(',',hola[i])
        crearEnfermera(texto[0],texto[1],texto[2],texto[3],texto[4],texto[5],texto[6])
        i = i+1 

def cargamasivaM(data):
    hola = re.split('\n',data)
    i=1
    while i < len(hola):
        texto = re.split(',',hola[i])
        crearMedicamento(texto[0],texto[1],texto[2],texto[3])
        i = i+1 

#EndPoints

@app.route('/obtenerusuarios')
def obtenerusuarios():
    return control.obtener_usuario()

@app.route('/obtenerpaciente')
def obtenerpaciente():
    return obtener_paciente()

@app.route('/obtenercita')
def obtenercita():
    return obtener_cita()

@app.route('/obtenerdoctor')
def obtenerdoctor():
    return control.obtener_doctor()

@app.route('/obtenerenfermera')
def obtenerenfermera():
    return obtener_enfermera()

@app.route('/obtenermedicamento')
def obtenermedicamento():
    return obtener_medicamento()

#Eliminar datos
@app.route('/paciente/<user>',methods=['DELETE'])
def eliminarpaciente(user):
    if(eliminar_paciente(user)):
        return '{"data":"Eliminado"}'
    return '{"data":"Error"}'

@app.route('/doctor/<user>',methods=['DELETE'])
def eliminardoctor(user):
    if(control.eliminar_doctor(user)):
        return '{"data":"Eliminado"}'
    return '{"data":"Error"}'

@app.route('/enfermera/<user>',methods=['DELETE'])
def eliminarenfermera(user):
    if(eliminar_enfermera(user)):
        return '{"data":"Eliminado"}'
    return '{"data":"Error"}'

@app.route('/medicamento/<nombre>',methods=['DELETE'])
def eliminarmedicamento(nombre):
    if(eliminar_medicamento(nombre)):
        return '{"data":"Eliminado"}'
    return '{"data":"Error"}'

#actualizar datos
@app.route('/paciente/<user>',methods=['PUT'])
def actualizarpaciente(user):
    dato=request.json
    if actualizar_paciente(user,dato['nombre'],dato['apellido'],dato['fecha'],dato['sexo'],dato['user'],dato['password'],dato['telefono']):
        return '{"data":"Actualizado"}'
    return '{"data":"Error"}'

@app.route('/cita/<user>',methods=['PUT'])
def actualizarcita(user):
    dato=request.json
    if actualizar_cita(user,dato['user'],dato['fecha'],dato['hora'],dato['motivo'],dato['estado']):
        return '{"data":"Actualizado"}'
    return '{"data":"Error"}'

@app.route('/doctor/<user>',methods=['PUT'])
def actualizardoctor(user):
    dato=request.json
    if control.actualizar_doctor(user,dato['nombre'],dato['apellido'],dato['fecha'],dato['sexo'],dato['user'],dato['password'],dato['especialidad'],dato['telefono']):
        return '{"data":"Actualizado"}'
    return '{"data":"Error"}'

@app.route('/enfermera/<user>',methods=['PUT'])
def actualizarenfermera(user):
    dato=request.json
    if actualizar_enfermera(user,dato['nombre'],dato['apellido'],dato['fecha'],dato['sexo'],dato['user'],dato['password'],dato['telefono']):
        return '{"data":"Actualizado"}'
    return '{"data":"Error"}'

@app.route('/medicamento/<nombre>',methods=['PUT'])
def actualizarmedicamento(nombre):
    dato=request.json
    if actualizar_medicamento(nombre,dato['nombre'],dato['precio'],dato['descripcion'],dato['cantidad']):
        return '{"data":"Actualizado"}'
    return '{"data":"Error"}'

#login
@app.route('/login/<user>/<password>')
def login(user,password):
    print('entra')
    return control.iniciar_sesion(user,password)

@app.route('/loginP/<user>/<password>')
def loginP(user,password):
    print('entra paciente')
    return iniciar_sesionP(user,password)

@app.route('/loginD/<user>/<password>')
def loginD(user,password):
    print('entra doctor')
    return control.iniciar_sesionD(user,password)

@app.route('/loginE/<user>/<password>')
def loginE(user,password):
    print('entra enfermera')
    return iniciar_sesionE(user,password)

@app.route('/registro',methods=['POST'])
def registrar():
    dato=request.json
    crearPaciente(dato['nombre'],dato['apellido'],dato['fecha'],dato['sexo'],dato['user'],dato['password'],dato['telefono'])
    return '{"data":"Creado"}'

#registro de citas
@app.route('/registroC',methods=['POST'])
def registrarC():
    dato=request.json
    crearCita(dato['user'],dato['fecha'],dato['hora'],dato['motivo'],dato['estado'])
    return '{"data":"Creado"}'

#carga masiva
@app.route('/carga',methods=['POST'])
def carga():
    dato = request.json
    cargamasiva(dato['data'])
    return '{"data":"Cargados"}'

@app.route('/cargaD',methods=['POST'])
def cargaD():
    dato = request.json
    control.cargamasivaD(dato['data'])
    return '{"data":"Cargados"}'

@app.route('/cargaE',methods=['POST'])
def cargaE():
    dato = request.json
    cargamasivaE(dato['data'])
    return '{"data":"Cargados"}'

@app.route('/cargaM',methods=['POST'])
def cargaM():
    dato = request.json
    cargamasivaM(dato['data'])
    return '{"data":"Cargados"}'


#informacion de 1 usuario especifico
@app.route('/Info', methods=['POST'])
def ObtenerPaciente():
    global paciente
    user = request.json['user']
    for us in paciente:
        if us.getUser() == user:
            Dato = {
                'nombre':us.getNombre(), 
                'apellido':us.getApellido(), 
                'fecha':us.getFecha(), 
                'sexo':us.getSexo(), 
                'user':us.getUser(),
                'password':us.getPassword(),
                'telefono':us.getTelefono()
                }
            break
    respuesta = jsonify(Dato)
    return(respuesta)    
    
@app.route('/InfoE', methods=['POST'])
def ObtenerEnfermera():
    global enfermera
    user = request.json['user']
    for us in enfermera:
        if us.getUser() == user:
            Dato = {
                'nombre':us.getNombre(), 
                'apellido':us.getApellido(), 
                'fecha':us.getFecha(), 
                'sexo':us.getSexo(), 
                'user':us.getUser(),
                'password':us.getPassword(),
                'telefono':us.getTelefono()
                }
            break
    respuesta = jsonify(Dato)
    return(respuesta)   

#estado de la cita
@app.route('/InfoA', methods=['POST'])
def ObtenerCitaA():
    global aceptada
    user = request.json['user']
    for us in aceptada:
        if us.getUser() == user:
            Dato = {
                'user':us.getUser(), 
                'fecha':us.getFecha(), 
                'hora':us.getHora(), 
                'motivo':us.getMotivo(), 
                'estado':us.getEstado()
                }
            break
    respuesta = jsonify(Dato)
    return(respuesta)   

@app.route('/InfoR', methods=['POST'])
def ObtenerCitaR():
    global rechazada
    user = request.json['user']
    for us in rechazada:
        if us.getUser() == user:
            Dato = {
                'user':us.getUser(), 
                'fecha':us.getFecha(), 
                'hora':us.getHora(), 
                'motivo':us.getMotivo(), 
                'estado':us.getEstado()
                }
            break
    respuesta = jsonify(Dato)
    return(respuesta)   

#Aceptar cita
@app.route('/AceptarCita', methods=['POST','DELETE'])
def AceptarCita():
    global cita, aceptada
    pos = int(request.json['pos'])
    user = cita[pos].getUser()
    fecha= cita[pos].getFecha()
    hora = cita[pos].getHora()
    motivo = cita[pos].getMotivo()
    estado = cita[pos].getEstado()
    aceptada.append(Aceptada(user,fecha,hora,motivo,estado))
    Dato = {
             'message':'Success',
             'reason': 'La cita ha sido aceptada'  
            }
    del cita[pos]
    respuesta = jsonify(Dato)
    return (respuesta)

#Rechazar cita
@app.route('/RechazarCita', methods=['POST','DELETE'])
def RechazarCita():
    global cita, rechazada
    pos = int(request.json['pos'])
    user = cita[pos].getUser()
    fecha= cita[pos].getFecha()
    hora = cita[pos].getHora()
    motivo = cita[pos].getMotivo()
    estado = cita[pos].getEstado()
    rechazada.append(Rechazada(user,fecha,hora,motivo,estado))
    Dato = {
             'message':'Success',
             'reason': 'La cita ha sido rechazada'  
            }
    del cita[pos]
    respuesta = jsonify(Dato)
    return (respuesta)

#Mostrar citas aceptadas
@app.route('/aceptada', methods= ['GET'])
def obtenerAceptada():
    global aceptada
    Datos = []
    for us in aceptada:
        Dato = { 
            'user':us.getUser(),
            'fecha':us.getFecha(), 
            'hora':us.getHora(), 
            'motivo':us.getMotivo(),
            'estado':us.getEstado()
         }
        Datos.append(Dato)
    respuesta = jsonify(Datos)
    return(respuesta)

@app.route('/rechazada', methods= ['GET'])
def obtenerRechazada():
    global rechazada
    Datos = []
    for us in rechazada:
        Dato = { 
            'user':us.getUser(),
            'fecha':us.getFecha(), 
            'hora':us.getHora(), 
            'motivo':us.getMotivo(),
            'estado':us.getEstado()
         }
        Datos.append(Dato)
    respuesta = jsonify(Datos)
    return(respuesta)

#Agregar al carrito
@app.route('/agregaCarro', methods=['POST'])
def agregaCarro():
    dato=request.json
    crearCarro(dato['nombre'],dato['precio'],dato['descripcion'],dato['cantidad'])
    return '{"data":"Creado"}'

@app.route('/carritoO')
def obtenercarro():
    return obtener_carro()

#INICIAR EL SERVIDOR

if __name__== "__main__": 
    app.run(host="0.0.0.0",port=5050,debug=True)