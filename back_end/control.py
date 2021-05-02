from usuario import Usuario
from doctor import Doctor
from enfermera import Enfermera
from medicamento import Medicamento
import json
import re
from flask import Flask,request,jsonify

class control:
    def __init__(self):
        self.usuario=[]
        
        self.doctor=[]
        
        

        self.usuario.append(Usuario('Javier','Golon','admin','1234'))
        
    
     
    #Crear doctor
    def crearDoctor(self,nombre,apellido,fecha,sexo,user,password,especialidad,telefono):
        self.doctor.append(Doctor(nombre,apellido,fecha,sexo,user,password,especialidad,telefono))

    
    
    

    #mostrar datos
        
    def obtener_usuario(self):
        return json.dumps([ob.__dict__ for ob in self.usuario])

    def obtener_doctor(self):
        return json.dumps([ob.__dict__ for ob in self.doctor])

    
    
    
    
    #actualizar datos

    def actualizar_doctor(self,user,user_nuevo,apellido,fecha,sexo,nombre,password,especialidad,telefono):
        for x in self.doctor:
            if x.user==user:
                self.doctor[self.doctor.index(x)]=Doctor(nombre,apellido,fecha,sexo,user_nuevo,password,especialidad,telefono)
                return True
        return False 


    
    

    #elilminar datos

    def eliminar_doctor(self,user):
        for x in self.doctor:
            if x.user==user:
                self.doctor.remove(x)
                return True
        return False 



    

    #login
    def iniciar_sesion(self,user,password):
        for x in self.usuario:
            if x.password==password and x.user==user:
                return json.dumps(x.__dict__)
        return '{"nombre":"false"}'
    
    def iniciar_sesionD(self,user,password):
        for x in self.doctor:
            if x.password==password and x.user==user:
                return json.dumps(x.__dict__)
        return '{"nombre":"false"}' 
    


    #carga masiva
    
    def cargamasivaD(self,data):
        hola = re.split('\n',data)
        i=1
        while i < len(hola):
            texto = re.split(',',hola[i])
            self.crearDoctor(texto[0],texto[1],texto[2],texto[3],texto[4],texto[5],texto[6],texto[7])
            i = i+1 


    
    
