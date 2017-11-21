import pymongo as mongo

class pie_controller:
    
    client = mongo.MongoClient()
    db = client.Pie

    def crearUsuario(self,nombreCompleto,codigoEstudiante,codigoCarne,correo,celular):
        self.db.usuarios.insert({"nombre":nombreCompleto,"codigoE":codigoEstudiante,"codigoC":codigoCarne,"correo":correo,"celular":celular,"observaciones":" ","items":[]})

#debug usuario
#crearUsuario("Joshua Arley Castro Villa","201610049010","12345668","jsanc@sdfsdf.edu.co","30023424055")

    def ponerObservaciones(self,codigo,observaciones):
        self.db.usuarios.update({"codigoC":codigo},{"$set":{"observaciones":observaciones}})

    def agregarItem(self,nombre):
        self.db.items.insert({"nombre":nombre,"vecesPrestado":0})

    def agregarItemUsuario(self,items,codigo):
        self.db.usuarios.update({ "codigoC":codigo},{ "$push": { "items": { "$each":items}}})
        
        for item in items:
            current=self.db.items.find({"nombre":item})
            new = current[0]
            x = new["vecesPrestado"] + 1
            self.db.items.update({"nombre":item},{"$set":{"vecesPrestado":x}})

    def devolverItemUsuario(self, nombre, codigo):
        estudiante = self.db.usuarios.find({"codigoC": codigo})
        items = estudiante[0]["items"]

        for item in nombre:
            items.remove(item)

        self.db.usuarios.update({"codigoC" : codigo }, { "$set": { "items": items}})
        
    def devolverTodoUsuario(self, codigo):
        self.db.usuarios.update({"codigoC" : codigo }, { "$set": { "items": []}})

    
    def obtenerTodosLosItems(self):
        itemsOrdenados = self.db.items.find().sort("vecesPrestado" , -1 )
        listaItems=[]
        for i in itemsOrdenados:
             listaItems.append(i["nombre"])
        return listaItems

    def itemsPorPersona(self,codigo):
        estudiante = self.db.usuarios.find({"codigoC": codigo})
        items = estudiante[0]["items"]
        return items

    def actualizarInfoUsuario(self,codigoC,celular,nombre,correo,codigo):
        if celular is not None and celular is not "":
            self.db.usuarios.update({"codigoC":codigoC},{"$set":{"celular":celular}})
            
        if nombre is not None and nombre is not "":
            self.db.usuarios.update({"codigoC":codigoC},{"$set":{"nombre":nombre}})

        if correo is not None and correo is not "":
            self.db.usuarios.update({"codigoC":codigoC},{"$set":{"correo":correo}})

        if codigo is not None and codigo is not "":
            self.db.usuarios.update({"codigoC":codigoC},{"$set":{"codigoE":codigo}})

 ###################################################################
 #                                                                 #
 #                               DEBUG                             #
 #                                                                 #
 # #################################################################
 
#debug update observaciones
#ponerObservaciones("201610049010","villa cmamo")
#bd = pie_controller()
#x = ["mouse2", "mouse2"]
#bd.agregarItem("Cable2")
#bd.agregarItem("Monitor2")
#bd.agregarItem("mouse2")
#bd.actualizarInfoUsuario("12345668","2345555","Viejo","viejortiz@eafit.edu.co","201610046914")
#bd.crearUsuario("El viejo","201610049011","12345668","viejo@sdfsdf.edu.co","3029492420")
#bd.agregarItemUsuario(x,"12345668")
#bd.devolverItemUsuario(x,"12345668")
#print bd.itemsPorPersona("12345668")
#bd.devolverTodoUsuario("12345668")
#bd.obtenerTodosLosItems()



