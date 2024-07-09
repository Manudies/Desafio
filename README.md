# Proyecto Desafío

Este proyecto es un reto propuesto por la empresa Seniority.IA, que tiene dos objetivos: diseñar un Sistema de Selección para el Programa Playbook Silver Economy que facilite a las personas interesadas en nuestra formación determinar el bloque del programa Playbook Silver Economy más adecuado para ellos. Y por otro lado, desarrollar una solución integral que ofrezca asistencia técnica especializada en UX (experiencia de usuario) adaptada a las necesidades de las personas mayores, proporcionando a las empresas y emprendedores las herramientas necesarias para seleccionar formación en UX Senior-Friendly y también permitirles contratar servicios de asistencia técnica para proyectos enfocados en la Silver Economy.

El proyecto consta de un backend construido con Express y un frontend desarrollado con React.

## Formularios

- **Sección Consultoría**: Los usuarios podrán saber qué pack es el más recomendado para ellos y del cual pueden solicitar más información. Les llegará un correo al correo con el que se hayan registrado, informándoles que nos pondremos en contacto con ellos.
- **Sección Formación**: Los usuarios sabrán en qué fase se encuentran y qué medidas tienen que implementar.

## Backend

Este archivo configura y establece el servidor backend utilizando Express. Se encarga de manejar las conexiones de los clientes, gestionar los usuarios conectados y manejar los paquetes y los módulos recomendados, para que los clientes puedan solicitar más información para contratarlos.

El archivo comienza con la configuración del servidor Express, donde se importan los módulos necesarios, se crea una instancia de la aplicación Express, se configura el middleware CORS y se crea un servidor HTTP utilizando la instancia de Express.

A continuación, se define un objeto `users` para almacenar los usuarios conectados. Cuando un cliente se conecta, puede ver desde su panel de usuario de qué packs o módulos ha solicitado información anteriormente.

## Frontend

El frontend se encarga de proporcionar la interfaz de usuario para que pueda informarse, realizar los tests, y averiguar cuál se adapta mejor para él. A continuación, se describen los componentes principales del frontend.

### App.jsx

Este componente es el punto de entrada de la aplicación React. Se encarga de gestionar el estado del nombre de usuario y renderizar condicionalmente la interfaz del panel de usuario o el componente de login.

El componente comienza importando los módulos y componentes necesarios. Luego, se define un estado para almacenar el nombre de usuario utilizando el hook `useState`.

Se utiliza el hook `useEffect` para emitir el pack o módulo de login al servidor cuando se establece el nombre de usuario. Esto permite asociar el nombre de usuario con el pack o módulo correspondiente en el backend.

Finalmente, se renderiza condicionalmente la interfaz del componente de login según si hay un nombre de usuario establecido. Si hay un nombre de usuario, se muestra su nombre y puede ver de qué packs y módulos ha solicitado información. Si no hay un nombre de usuario, no puede realizar el formulario.

## Beneficios

Los beneficios que se buscan con este proyecto para la empresa Seniority.IA:

1. **Orientación Personalizada**: Los usuarios recibirán recomendaciones de formación adaptadas a sus necesidades individuales, mejorando su experiencia de aprendizaje.
2. **Eficiencia en el Proceso de Selección**: Un sistema automatizado que ahorra tiempo y esfuerzo tanto para los usuarios como para el equipo administrativo.
3. **Mejora en la Calidad de la Formación**: Al asegurar que cada persona ingrese al bloque formativo adecuado, aumentará la efectividad de la formación y el éxito de los participantes.
4. **Formación Especializada**: Proveer a las empresas y emprendedores de conocimientos y habilidades en UX Senior-Friendly, mejorando la calidad y accesibilidad de sus productos y servicios.
5. **Apoyo Técnico Personalizado**: Ofrecer asistencia técnica adaptada a las necesidades específicas de cada proyecto, garantizando que los productos desarrollados sean realmente útiles y usables para las personas mayores.
6. **Mejora de Productos y Servicios**: Asegurar que los productos y servicios enfocados en la Silver Economy cumplan con altos estándares de usabilidad y accesibilidad, aumentando su aceptación y éxito en el mercado.
## Estructura del Proyecto

La estructura principal del proyecto es la siguiente:

```
Desafio/
│
├── server/
│   ├── node_modules/
│   │   ├── @anthropic-ai/sdk/
│   │   ├── @jest/
│   │   └── ...
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   └── index.js
│   ├── package.json
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.jsx
│   ├── package.json
│
└── README.md
```


### Directorios y Archivos Principales

- **server/**: Contiene la parte del servidor del proyecto.
  - **node_modules/**: Dependencias de Node.js.
  - **src/**: Código fuente del servidor.
    - **controllers/**: Controladores de la aplicación.
    - **models/**: Modelos de datos.
    - **routes/**: Definición de rutas del servidor.
    - **app.ts**: Punto de entrada de la aplicación del servidor.
  - **package.json**: Archivo de configuración de dependencias y scripts del servidor.
  
- **client/**: Contiene la parte del cliente del proyecto.
  - **public/**: Archivos públicos estáticos.
  - **src/**: Código fuente del cliente.
    - **components/**: Componentes de React.
    - **pages/**: Páginas de la aplicación.
    - **App.js**: Componente principal de React.
  - **package.json**: Archivo de configuración de dependencias y scripts del cliente.

## Instalación

### Requisitos Previos

- Node.js (versión 14 o superior)
- npm (versión 6 o superior) o yarn (versión 1.22 o superior)

### Pasos para la Instalación

1. Clona el repositorio:

    ```bash
    git clone <URL_DEL_REPOSITORIO>
    cd Desafio
    ```

2. Instala las dependencias del servidor:

    ```bash
    cd server
    npm install
    ```

3. Instala las dependencias del cliente:

    ```bash
    cd ../client
    npm install
    ```

## Uso

### Producción y desarrollo

Para construir y ejecutar el servidor:

```bash
cd server
docker compose ip --build
```

Para construir y servir el cliente:

```bash
cd client
npm run dev
```

### Tecnologías del Proyecto de client:

1. Scripts

	•	Vite
	•	dev: Inicia el servidor de desarrollo.
	•	build: Construye la aplicación para producción.
	•	lint: Ejecuta ESLint para revisar el código.
	•	preview: Previsualiza la aplicación construida.

2. Dependencias (Dependencies)

	•	FontAwesome
	•	@fortawesome/fontawesome-svg-core: Núcleo de FontAwesome.
	•	@fortawesome/free-brands-svg-icons: Iconos de marcas.
	•	@fortawesome/free-regular-svg-icons: Iconos regulares.
	•	@fortawesome/react-fontawesome: Integración con React.
	•	PropTypes
	•	prop-types: Verificación de tipos en React.
	•	React y su Ecosistema
	•	react: Biblioteca para interfaces de usuario.
	•	react-dom: Manipulación del DOM en React.
	•	react-icons: Iconos como componentes de React.
	•	react-router-dom: Navegación y rutas en React.

3. Dependencias de Desarrollo (DevDependencies)

	•	Tipos para TypeScript
	•	@types/react: Tipos para React.
	•	@types/react-dom: Tipos para React DOM.
	•	Vite
	•	@vitejs/plugin-react: Plugin para integrar React.
	•	ESLint
	•	eslint: Herramienta de linting.
	•	eslint-plugin-react: Reglas de ESLint para React.
	•	eslint-plugin-react-hooks: Reglas de ESLint para Hooks de React.
	•	eslint-plugin-react-refresh: Reglas de ESLint para actualización rápida de React.

### Tecnologías del Proyecto de server:

1. Scripts

	•	Start
	•	start: Ejecuta node src/index.js para iniciar la aplicación.
	•	Development
	•	dev: Ejecuta nodemon src/index.js para iniciar la aplicación con recarga automática.
	•	Testing
	•	test: Ejecuta node --experimental-vm-modules node_modules/jest/bin/jest.js --coverage para correr pruebas con Jest y generar un informe de cobertura.

2. Dependencias (Dependencies)

	•	@anthropic-ai/sdk: SDK para interactuar con servicios de Anthropic AI.
	•	bcryptjs: Biblioteca para el hashing de contraseñas.
	•	cors: Middleware para habilitar CORS (Cross-Origin Resource Sharing).
	•	dotenv: Carga variables de entorno desde un archivo .env.
	•	express: Framework para aplicaciones web y APIs.
	•	jsonwebtoken: Implementación de JSON Web Tokens para autenticación.
	•	mongoose: ODM (Object Data Modeling) para MongoDB y Node.js.
	•	nodemailer: Biblioteca para enviar correos electrónicos.
	•	swagger-ui-express: Middleware para servir la interfaz de Swagger UI y documentar APIs.

3. Dependencias de Desarrollo (DevDependencies)

	•	jest: Framework de pruebas para JavaScript.
	•	nodemon: Herramienta para reiniciar automáticamente la aplicación cuando se detectan cambios en los     archivos.

## Documentacion adicional

### Swagger

	• http://localhost:3030/api-docs/