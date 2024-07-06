class pregunta:
    # Constructor de la clase
    def __init__(self,nombre,n_respuestas):
        self.n_respuestas = n_respuestas
        self.nombre = nombre

class salida:
    # Constructor de la clase
    def __init__(self,nombre):
        self.pesos = {}
        self.nombre = nombre
    
    def add_peso(self,nom_pregunta,n_respuesta,peso):
        if nom_pregunta not in self.pesos:
            self.pesos[nom_pregunta] = {}
        self.pesos[nom_pregunta][f'R{n_respuesta}'] = peso

class silver_logic_model:
    # Constructor de la clase
    def __init__(self):
        self.preguntas = []
        self.salidas = []
        self.n_preguntas = 0
        self.n_salidas = 0

    def add_pregunta(self,n_respuestas):
        self.n_preguntas += 1
        self.preguntas.append(pregunta(f'P{str(self.n_preguntas)}',n_respuestas))
    
    def add_salida(self):
        self.n_salidas += 1
        self.salidas.append(salida(f'S{str(self.n_salidas)}'))

    def add_peso(self,n_pregunta,n_salida,n_respuesta,peso):
        if n_pregunta > self.n_preguntas:
            print('La pregunta no existe')
        elif n_salida > self.n_salidas:
            print('La salida no existe')
        elif self.preguntas[n_pregunta-1].n_respuestas < n_respuesta:
            print('La respuesta no existe')
        else:
            self.salidas[n_salida-1].add_peso(self.preguntas[n_pregunta-1].nombre,n_respuesta,peso)

    def predecir_salida(self,respuestas):
        resultados = {}
        for i in self.salidas:
            suma_pesos_tot = 0
            suma_pesos_real = 0
            for j in i.pesos.items():
                if f'R{respuestas[int(j[0][1])-1]}' in j[1]:
                    suma_pesos_real += j[1][f'R{respuestas[int(j[0][1])-1]}']
                # for k in j[1].values():
                suma_pesos_tot += max(j[1].values())
              
            resultados[i.nombre] = (suma_pesos_real / suma_pesos_tot)
        
        res_ordenados = sorted(resultados, key=resultados.get, reverse=True)
        return res_ordenados