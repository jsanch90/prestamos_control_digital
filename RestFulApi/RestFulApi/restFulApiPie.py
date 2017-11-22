from flask import Flask
from flask import jsonify
from flask import request
from flask_pymongo import PyMongo
from flask_cors import CORS
import serial

app = Flask(__name__)
CORS(app)

app.config['MONGO_DBNAME'] = 'Pie'
app.config['MONGO_URI'] = 'mongodb://localhost:27017/Pie'

mongo = PyMongo(app)



@app.route('/obtenerCodigo' , methods=['GET'])
def obtenerCodigo():
  print "entra a obtener codigo"
  output = []
  codigo = ''
  ser = serial.Serial("/dev/ttyACM0" , 9600)

  while True:
   # try:
      codigo = ser.readline()
      print codigo
      if (len(codigo) > 0):
        codigo = codigo.replace("\r\n", '')
        try:
          estudiantes = mongo.db.usuarios.find({"codigoC": codigo})
          sujeto = estudiantes[0]
          output.append(sujeto["items"])
          output.append(sujeto["observaciones"])
          output.append(sujeto["correo"])
          output.append(sujeto["codigoC"])
          output.append(sujeto["codigoE"])
          output.append(sujeto["nombre"])
          output.append(sujeto["celular"])
          ser.close()
          return jsonify({'result': output})
        except:
          ser.close()
          return jsonify({'result': False})
      else:
        codigo = ser.readline()
    #except:
     # print "error"

  return jsonify({'result':codigo})



@app.route('/items', methods=['GET'])
def obtenerTodosLosItems():
  item = mongo.db.items.find().sort("vecesPrestado" , -1 )
  output = []
  for it in item:
    output.append({'nombre' : it['nombre']})
  return jsonify({'result' : output})

@app.route('/usuario', methods=['POST'])
def crearUsuario():
  nombre = request.json['nombre']
  #items = request.json['items']
  #observaciones = request.json['observaciones']
  correo = request.json['correo']
  codigoC = request.json['codigoC']
  codigoE = request.json['codigoE']
  celular = request.json['celular']
  mongo.db.usuarios.insert({'nombre' : nombre, 'items' : [], 'observaciones':'','correo':correo,'codigoC':codigoC,'codigoE':codigoE,'celular':celular})
  output = {'nombre' : nombre, 'items' : [], 'observaciones':'','correo':correo,'codigoC':codigoC,'codigoE':codigoE,'celular':celular}
  return jsonify({'result' : output})


@app.route('/item', methods=['POST'])
def agregarItem():
  nombre = request.json['nombre']
  mongo.db.items.insert({'nombre' : nombre,'vecesPrestado':0})
  output = {'nombre' : nombre,'vecesPrestado':0}
  return jsonify({'result' : output})



@app.route('/observaciones', methods=['PUT'])
def ponerObservaciones():
  codigo= request.json['codigoC']
  observaciones = request.json['observaciones']
  mongo.db.usuarios.update({"codigoC":codigo},{"$set":{"observaciones":observaciones}})
  output = {'observaciones':observaciones}
  return jsonify({'result' : output})

@app.route('/addItemUser', methods=['PUT'])
def agregarItemUsuario():
  codigo= request.json['codigoC']
  items = request.json['items']
  mongo.db.usuarios.update({ "codigoC":codigo},{ "$push": { "items": { "$each":items}}})

  for item in items:
    current = mongo.db.items.find({"nombre":item})
    new = current[0]
    x = new["vecesPrestado"] + 1
    mongo.db.items.update({"nombre":item},{"$set":{"vecesPrestado":x}})
                            
  output = {'items':items}
  return jsonify({'result' : output})


@app.route('/devolver', methods=['PUT'])
def devolverItemUsuario():
  codigo= request.json['codigoC']
  cosas = request.json['cosas']
  estudiante = mongo.db.usuarios.find({"codigoC": codigo})
  items = estudiante[0]["items"]
  for item in cosas:
    items.remove(item)

  mongo.db.usuarios.update({"codigoC" : codigo }, { "$set": { "items": items}})
  output = items
  return jsonify({'result' : output})


@app.route('/devolverTodo', methods=['PUT'])
def devolverTodoUsuario():
  codigo= request.json['codigoC']
  mongo.db.usuarios.update({"codigoC" : codigo }, { "$set": { "items": []}})
  return jsonify({'result' : [] })


@app.route('/itemPorPersona', methods=['GET'])
def itemPorPersona():
    codigo= request.args['codigoC']
    estudiante = mongo.db.usuarios.find({"codigoC": codigo})
    items = estudiante[0]["items"]
    return jsonify({'result' : items})
  
@app.route('/administracion', methods=['POST'])
#@crossdomain(origin='*')
def validarIngreso():
    print "server"
    user = request.json['usuario']
    print request
    contra = request.json['contrasena']
    print user
    print contra
    try:
      admin = mongo.db.admin.find({"usuario": user})
      if admin[0]['contrasena'] == contra:
        return jsonify(True)
      else:
        return jsonify(False)
    except:
      return jsonify(False)


@app.route('/actualizarInf', methods=['PUT'])
def actualizarInfoUsuario():
  codigoC = request.json['codigoC']
  celular = request.json['celular']
  nombre = request.json['nombre']
  correo = request.json['correo']
  codigoE = request.json['codigoE']
  print "ajksdhakjsdn"
  print len(correo)
  
  if len(celular) > 0 :
    mongo.db.usuarios.update({"codigoC":codigoC},{"$set":{"celular":celular}})

  if len(nombre) > 0:
    mongo.db.usuarios.update({"codigoC":codigoC},{"$set":{"nombre":nombre}})

  if len(correo) > 0:
    mongo.db.usuarios.update({"codigoC":codigoC},{"$set":{"correo":correo}})

  if len(codigoE) > 0:
    mongo.db.usuarios.update({"codigoC":codigoC},{"$set":{"codigoE":codigoE}})

  return jsonify({"Datos actualizados": True })
                  




# @app.route('/star/', methods=['GET'])
# def get_one_star(name):
#   star = mongo.db.stars
#   s = star.find_one({'name' : name})
#   if s:
#     output = {'name' : s['name'], 'distance' : s['distance']}
#   else:
#     output = "No such name"
#   return jsonify({'result' : output})

# @app.route('/star', methods=['POST'])
# def add_star():
#   star = mongo.db.stars
#   name = request.json['name']
#   distance = request.json['distance']
#   star_id = star.insert({'name': name, 'distance': distance})
#   new_star = star.find_one({'_id': star_id })
#   output = {'name' : new_star['name'], 'distance' : new_star['distance']}
#   return jsonify({'result' : output})

if __name__ == '__main__':
    app.run(debug=True)

