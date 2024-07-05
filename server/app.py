from flask import Flask, jsonify, request, abort
from flask_cors import CORS
import os
import pickle
from slm_model import *

app = Flask(__name__)
cors = CORS(app)

ruta_actual = os.path.abspath(__file__)
os.chdir(os.path.dirname(ruta_actual))

with open('models/model_cons.pkl', 'rb') as f:
    SLM_cons = pickle.load(f)

with open('models/model_form.pkl', 'rb') as f:
    SLM_form = pickle.load(f)

@app.route('/')
def home():
    return jsonify({'message': 'Welcome to the SeniorityAI API!'})

@app.route('/consultoria', methods=['GET'])
def consultoria():
    preg = request.args.to_dict()
    lista_packs = SLM_cons.predecir_salida([preg['p1'],preg['p2'],preg['p3'],preg['p4'],preg['p5'],preg['p6'],preg['p7'],preg['p8'],preg['p9'],])
    prediction = int(lista_packs[0][1])-1

    return jsonify({'prediction': prediction})

@app.route('/formacion', methods=['GET'])
def formacion():

    preg = request.args.to_dict()
    lista_forms = SLM_form.predecir_salida([preg['p1'],preg['p2'],preg['p3'],preg['p4'],preg['p5'],preg['p6'],preg['p7'],preg['p8'],preg['p9'],preg['p10'],])
    prediction = int(lista_forms[0][1])-1

    return jsonify({'prediction': prediction})

if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0")