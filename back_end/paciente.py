class Paciente:
    def __init__(self,nombre,apellido,fecha,sexo,user,password,telefono):
        self.nombre=nombre
        self.apellido=apellido
        self.fecha=fecha
        self.sexo=sexo
        self.user=user
        self.password=password
        self.telefono=telefono

    def getNombre(self):
        return self.nombre
    
    def getApellido(self):
        return self.apellido
    
    def getFecha(self):
        return self.fecha
    
    def getSexo(self):
        return self.sexo

    def getUser(self):
        return self.user
    
    def getPassword(self):
        return self.password
    
    def getTelefono(self):
        return self.telefono
    
    def setNombre(self,nombre):
        self.nombre=nombre
    
    def setApellido(self,apellido):
        self.apellido=apellido

    def setFecha(self,fecha):
        self.fecha=fecha
    
    def setSexo(self,sexo):
        self.sexo=sexo
    
    def setUser(self,user):
        self.user=user
    
    def setPassword(self,password):
        self.password=password
    
    def setTelefono(self,telefono):
        self.telefono=telefono