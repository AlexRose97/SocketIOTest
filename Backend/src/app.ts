import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'; // Importar cors
import project from './services/project/project.routes';
import SqlServerDB from './db/SqlServerDB';

const app = express();

// Configurar CORS
app.use(cors({
    origin: '*',  // Permitir solo solicitudes desde este dominio
    methods: ['GET', 'POST', 'DELETE', 'PUT', 'PATCH', 'OPTIONS'],       // Permitir solo estos métodos HTTP
    allowedHeaders: ['Content-Type', 'Authorization'], // Permitir solo estos encabezados
}));

app.use(bodyParser.json());

(async () => {
    try {
        SqlServerDB.getInstance();//conect to db
        app.use('/api/project', project);
    } catch (error) {

    }
})();

export default app;