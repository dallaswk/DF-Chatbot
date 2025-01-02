require('dotenv').config();

const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const dialogflow = require('@google-cloud/dialogflow');
const path = require('path');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: '*', 
        methods: ['GET', 'POST']
    }
});

const sessionClient = new dialogflow.SessionsClient({
    keyFilename: path.join(__dirname, process.env.DIALOGFLOW_KEY_FILE)
});

const PROJECT_ID = process.env.DIALOGFLOW_PROJECT_ID; 

async function detectIntent(text, sessionId) {
    const sessionPath = sessionClient.projectAgentSessionPath(PROJECT_ID, sessionId);
    const request = {
        session: sessionPath,
        queryInput: {
            text: {
                text,
                languageCode: 'es'
            }
        }
    };

    try {
        const responses = await sessionClient.detectIntent(request);
        const result = responses[0].queryResult;
        return result.fulfillmentText || 'No tengo una respuesta para eso.';
    } catch (error) {
        console.error('Error en Dialogflow:', error);
        return 'Hubo un error al procesar tu solicitud.';
    }
}

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

io.on('connection', (socket) => {
    console.log('⚡ Usuario conectado');

    socket.on('message', async (message) => {
        console.log('👤 Usuario:', message);
        try {
            const response = await detectIntent(message, socket.id);
            console.log('🤖 Bot:', response);
            socket.emit('response', response);
        } catch (error) {
            console.error('Error en el chatbot:', error);
            socket.emit('response', 'Ocurrió un error al obtener la respuesta.');
        }
    });

    socket.on('disconnect', () => {
        console.log('❌ Usuario desconectado');
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`✅ Servidor en http://localhost:${PORT}`);
});
