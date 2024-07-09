# Proyecto Desafío

Este proyecto es una implementación de un sistema basado en Node.js. A continuación, se describen los detalles sobre la estructura del proyecto, los pasos para la instalación, y cómo utilizarlo.

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