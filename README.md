# Chatbot con Dialogflow y Socket.IO

Este proyecto es una aplicación de chatbot construida con **Node.js**, **Express**, **Socket.IO**, y **Dialogflow**. Permite a los usuarios interactuar con un bot en tiempo real mediante una interfaz web simple.

---

## 🛠 Requisitos previos

Antes de comenzar, asegúrate de tener instalado lo siguiente:

- **Node.js** (v14 o superior)
- **npm** (incluido con Node.js)
- Una cuenta de **Google Cloud** con un proyecto de Dialogflow configurado.
- Archivo de credenciales JSON para Dialogflow.

---

## 🚀 Instalación

1. **Clona el repositorio**:
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd <NOMBRE_DEL_PROYECTO>
   ```

## 🚀 Instalación

2. **Instala las dependencias**:
   ```bash
   npm install
   ```

3. **Configura el archivo `.env`**:

- `DIALOGFLOW_PROJECT_ID`: El ID de tu proyecto de Dialogflow.  
- `DIALOGFLOW_KEY_FILE`: Ruta al archivo JSON de credenciales de Dialogflow.  
- `PORT`: Puerto en el que correrá el servidor (opcional, por defecto es 3000).  

3. **Coloca el archivo JSON de credenciales**  
Guarda tu archivo de credenciales JSON (obtenido desde Google Cloud) en la raíz del proyecto con el nombre especificado en `DIALOGFLOW_KEY_FILE`.  

---

## 🌐 Uso

1. **Inicia el servidor**  
Ejecuta el comando `npm start` para levantar el servidor.  

Esto levantará el servidor en `http://localhost:3000`.  

2. **Accede a la interfaz web**  
Abre tu navegador y visita `http://localhost:3000`. Verás una interfaz simple de chatbot donde puedes interactuar con el bot.  

3. **Envía mensajes**  
- Escribe un mensaje en el cuadro de texto y presiona "Enter".  
- El chatbot procesará tu mensaje utilizando Dialogflow y responderá en la misma interfaz.  

---

## 📂 Estructura del proyecto

```plaintext
├── public/
│   └── index.html      # Interfaz del chatbot
├── server.js           # Código principal del servidor
├── .env                # Configuración del entorno
├── dialogflow-key.json # Archivo de credenciales (no incluido en el repositorio)
└── package.json        # Dependencias y configuración del proyecto
```
---

## 🧩 Tecnologías utilizadas

- **Node.js**  
- **Express**  
- **Socket.IO**  
- **Dialogflow**  
- **Google Cloud**  

---

## 📝 Notas

- Asegúrate de que el archivo JSON de credenciales esté correctamente configurado y accesible.  
- Si recibes errores de permisos, verifica las IAM permissions en Google Cloud.  

