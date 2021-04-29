from usuario import Usuario
from paciente import Paciente
from doctor import Doctor
from enfermera import Enfermera
from medicamento import Medicamento
import json
import re

class control:
    def __init__(self):
        self.usuario=[]
        self.paciente=[]
        self.doctor=[]
        self.enfermera=[]
        self.medicamento=[]

        self.usuario.append(Usuario('Javier','Golon','admin','1234'))
        
    #Registro Paciente
    def crearPaciente(self,nombre,apellido,fecha,sexo,user,password,telefono):
        self.paciente.append(Paciente(nombre,apellido,fecha,sexo,user,password,telefono))
     
    #Crear doctor
    def crearDoctor(self,nombre,apellido,fecha,sexo,user,password,especialidad,telefono):
        self.doctor.append(Doctor(nombre,apellido,fecha,sexo,user,password,especialidad,telefono))

    #Crear enfermera
    def crearEnfermera(self,nombre,apellido,fecha,sexo,user,password,telefono):
        self.enfermera.append(Enfermera(nombre,apellido,fecha,sexo,user,password,telefono))
    
    #Crear medicamento
    def crearMedicamento(self,nombre,precio,descripcion,cantidad):
        self.medicamento.append(Medicamento(nombre,precio,descripcion,cantidad))

    #mostrar datos
    def obtener_paciente(self):
        return json.dumps([ob.__dict__ for ob in self.paciente])
        
    def obtener_usuario(self):
        return json.dumps([ob.__dict__ for ob in self.usuario])

    def obtener_doctor(self):
        return json.dumps([ob.__dict__ for ob in self.doctor])

    def obtener_enfermera(self):
        return json.dumps([ob.__dict__ for ob in self.enfermera])
    
    def obtener_medicamento(self):
        return json.dumps([ob.__dict__ for ob in self.medicamento])
    
    #actualizar datos
    def actualizar_paciente(self,user,user_nuevo,apellido,fecha,sexo,nombre,password,telefono):
        for x in self.paciente:
            if x.user==user:
                self.paciente[self.paciente.index(x)]=Paciente(nombre,apellido,fecha,sexo,user_nuevo,password,telefono)
                return True
        return False 

    def actualizar_doctor(self,user,user_nuevo,apellido,fecha,sexo,nombre,password,especialidad,telefono):
        for x in self.doctor:
            if x.user==user:
                self.doctor[self.doctor.index(x)]=Doctor(nombre,apellido,fecha,sexo,user_nuevo,password,especialidad,telefono)
                return True
        return False 

    def actualizar_enfermera(self,user,user_nuevo,apellido,fecha,sexo,nombre,password,telefono):
        for x in self.enfermera:
            if x.user==user:
                self.enfermera[self.enfermera.index(x)]=Enfermera(nombre,apellido,fecha,sexo,user_nuevo,password,telefono)
                return True
        return False 
    
    def actualizar_medicamento(self,nombre,nombre_nuevo,precio,descripcion,cantidad):
        for x in self.medicamento:
            if x.nombre==nombre:
                self.medicamento[self.medicamento.index(x)]=Medicamento(nombre_nuevo,precio,descripcion,cantidad)
                return True
        return False 

    #elilminar datos
    def eliminar_paciente(self,user):
        for x in self.paciente:
            if x.user==user:
                self.paciente.remove(x)
                return True
        return False 

    def eliminar_doctor(self,user):
        for x in self.doctor:
            if x.user==user:
                self.doctor.remove(x)
                return True
        return False 

    def eliminar_enfermera(self,user):
        for x in self.enfermera:
            if x.user==user:
                self.enfermera.remove(x)
                return True
        return False 

    def eliminar_medicamento(self,nombre):
        for x in self.medicamento:
            if x.nombre==nombre:
                self.medicamento.remove(x)
                return True
        return False 

    #login
    def iniciar_sesion(self,user,password):
        for x in self.usuario:
            if x.password==password and x.user==user:
                return json.dumps(x.__dict__)
        return '{"nombre":"false"}'

    def iniciar_sesionP(self,user,password):
        for x in self.paciente:
            if x.password==password and x.user==user:
                return json.dumps(x.__dict__)
        return '{"nombre":"false"}' 
    
    def iniciar_sesionD(self,user,password):
        for x in self.doctor:
            if x.password==password and x.user==user:
                return json.dumps(x.__dict__)
        return '{"nombre":"false"}' 
    
    def iniciar_sesionE(self,user,password):
        for x in self.enfermera:
            if x.password==password and x.user==user:
                return json.dumps(x.__dict__)
        return '{"nombre":"false"}' 

    #carga masiva
    def cargamasiva(self,data):
        hola = re.split('\n',data)
        i=1
        while i < len(hola):
            texto = re.split(',',hola[i])
            self.crearPaciente(texto[0],texto[1],texto[2],texto[3],texto[4],texto[5],texto[6])
            i = i+1 
    
    def cargamasivaD(self,data):
        hola = re.split('\n',data)
        i=1
        while i < len(hola):
            texto = re.split(',',hola[i])
            self.crearDoctor(texto[0],texto[1],texto[2],texto[3],texto[4],texto[5],texto[6],texto[7])
            i = i+1 

    def cargamasivaE(self,data):
        hola = re.split('\n',data)
        i=1
        while i < len(hola):
            texto = re.split(',',hola[i])
            self.crearEnfermera(texto[0],texto[1],texto[2],texto[3],texto[4],texto[5],texto[6])
            i = i+1 
    
    def cargamasivaM(self,data):
        hola = re.split('\n',data)
        i=1
        while i < len(hola):
            texto = re.split(',',hola[i])
            self.crearMedicamento(texto[0],texto[1],texto[2],texto[3])
            i = i+1 
