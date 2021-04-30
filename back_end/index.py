#Importaciones de Flask

from flask import Flask,request,jsonify
from flask_cors import CORS
from control import control
from paciente import Paciente
import json,re

#Crear la app

app=Flask(__name__)
app.config["DEBUG"]=True

CORS(app)

control=control()

paciente=[]

#Registro Paciente
def crearPaciente(nombre,apellido,fecha,sexo,user,password,telefono):
    paciente.append(Paciente(nombre,apellido,fecha,sexo,user,password,telefono))

#mostrar datos
def obtener_paciente():
    return json.dumps([ob.__dict__ for ob in paciente])

#actualizar datos
def actualizar_paciente(user,user_nuevo,apellido,fecha,sexo,nombre,password,telefono):
    for x in paciente:
        if x.user==user:
            paciente[paciente.index(x)]=Paciente(nombre,apellido,fecha,sexo,user_nuevo,password,telefono)
            return True
    return False 

#elilminar datos
def eliminar_paciente(user):
    for x in paciente:
        if x.user==user:
            paciente.remove(x)
            return True
    return False 

#login
def iniciar_sesionP(user,password):
    for x in paciente:
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





#EndPoints

@app.route('/obtenerusuarios')
def obtenerusuarios():
    return control.obtener_usuario()

@app.route('/obtenerpaciente')
def obtenerpaciente():
    return obtener_paciente()

@app.route('/obtenerdoctor')
def obtenerdoctor():
    return control.obtener_doctor()

@app.route('/obtenerenfermera')
def obtenerenfermera():
    return control.obtener_enfermera()

@app.route('/obtenermedicamento')
def obtenermedicamento():
    return control.obtener_medicamento()

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
    if(control.eliminar_enfermera(user)):
        return '{"data":"Eliminado"}'
    return '{"data":"Error"}'

@app.route('/medicamento/<nombre>',methods=['DELETE'])
def eliminarmedicamento(nombre):
    if(control.eliminar_medicamento(nombre)):
        return '{"data":"Eliminado"}'
    return '{"data":"Error"}'

#actualizar datos
@app.route('/paciente/<user>',methods=['PUT'])
def actualizarpaciente(user):
    dato=request.json
    if actualizar_paciente(user,dato['nombre'],dato['apellido'],dato['fecha'],dato['sexo'],dato['user'],dato['password'],dato['telefono']):
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
    if control.actualizar_enfermera(user,dato['nombre'],dato['apellido'],dato['fecha'],dato['sexo'],dato['user'],dato['password'],dato['telefono']):
        return '{"data":"Actualizado"}'
    return '{"data":"Error"}'

@app.route('/medicamento/<nombre>',methods=['PUT'])
def actualizarmedicamento(nombre):
    dato=request.json
    if control.actualizar_medicamento(nombre,dato['nombre'],dato['precio'],dato['descripcion'],dato['cantidad']):
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
    return control.iniciar_sesionE(user,password)

@app.route('/registro',methods=['POST'])
def registrar():
    dato=request.json
    crearPaciente(dato['nombre'],dato['apellido'],dato['fecha'],dato['sexo'],dato['user'],dato['password'],dato['telefono'])
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
    control.cargamasivaE(dato['data'])
    return '{"data":"Cargados"}'

@app.route('/cargaM',methods=['POST'])
def cargaM():
    dato = request.json
    control.cargamasivaM(dato['data'])
    return '{"data":"Cargados"}'


#
@app.route('/Info', methods=['POST'])
def ObtenerPersona():
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
    


#INICIAR EL SERVIDOR

if __name__== "__main__": 
    app.run(host="0.0.0.0",port=5050,debug=True)