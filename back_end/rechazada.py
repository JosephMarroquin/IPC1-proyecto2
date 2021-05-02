class Rechazada:
    def __init__(self,user,fecha,hora,motivo,estado):
        self.user=user
        self.fecha=fecha
        self.hora=hora
        self.motivo=motivo
        self.estado='Rechazada'
    
    def getUser(self):
        return self.user
    
    def getFecha(self):
        return self.fecha
    
    def getHora(self):
        return self.hora
    
    def getMotivo(self):
        return self.motivo
    
    def getEstado(self):
        return self.estado

    
    def setUser(self,user):
        self.user=user
    
    def setFecha(self,fecha):
        self.fecha=fecha

    def setHora(self,hora):
        self.hora=hora
    
    def setMotivo(self,motivo):
        self.motivo=motivo
    
    def setEstado(self,estado):
        self.estado=estado