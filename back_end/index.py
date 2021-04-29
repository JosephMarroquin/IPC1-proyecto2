#Importaciones de Flask

from flask import Flask,request,jsonify
from flask_cors import CORS
from control import control

#Crear la app

app=Flask(__name__)
app.config["DEBUG"]=True

CORS(app)

control=control()

#EndPoints

@app.route('/obtenerusuarios')
def obtenerusuarios():
    return control.obtener_usuario()

@app.route('/obtenerpaciente')
def obtenerpaciente():
    return control.obtener_paciente()

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
    if(control.eliminar_paciente(user)):
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
    if control.actualizar_paciente(user,dato['nombre'],dato['apellido'],dato['fecha'],dato['sexo'],dato['user'],dato['password'],dato['telefono']):
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
    return control.iniciar_sesionP(user,password)

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
    control.crearPaciente(dato['nombre'],dato['apellido'],dato['fecha'],dato['sexo'],dato['user'],dato['password'],dato['telefono'])
    return '{"data":"Creado"}'

#carga masiva
@app.route('/carga',methods=['POST'])
def carga():
    dato = request.json
    control.cargamasiva(dato['data'])
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


#INICIAR EL SERVIDOR

if __name__== "__main__": 
    app.run(host="0.0.0.0",port=5050,debug=True)