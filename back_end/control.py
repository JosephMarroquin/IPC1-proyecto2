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
        
        
        
        

        self.usuario.append(Usuario('Javier','Golon','admin','1234'))
        
   
        
    def obtener_usuario(self):
        return json.dumps([ob.__dict__ for ob in self.usuario])

 
    #login
    def iniciar_sesion(self,user,password):
        for x in self.usuario:
            if x.password==password and x.user==user:
                return json.dumps(x.__dict__)
        return '{"nombre":"false"}'