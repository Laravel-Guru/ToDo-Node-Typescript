import express, { Application, Router } from 'express';
import bodyParser from 'body-parser';
import todosRouter from './routers/TodosRouter';
import pool from './dbconfig/dbconnector';
import cors from 'cors';

const allowedOrigins = ['http://localhost', 'http://127.0.0.1:5173'];

const options: cors.CorsOptions = {
  origin: allowedOrigins
};

class Server {
    private app;

    constructor() {
        this.app = express();
        this.config();
        this.routerConfig();
        this.dbConnect();
    }

    private config() {
        this.app.use(bodyParser.urlencoded({ extended:true }));
        this.app.use(bodyParser.json({ limit: '1mb' })); // 100kb default
        this.app.use(cors(options));
        this.app.use(express.json());
    }

    private dbConnect() {
        pool.connect(function (err, client, done) {
            if (err) throw new Error(err);
            console.log('Connected');
          }); 
    }

    private routerConfig() {
        this.app.use('/todos', todosRouter);
    }

    public start = (port: number) => {
        return new Promise((resolve, reject) => {
            this.app.listen(port, () => {
                resolve(port);
            }).on('error', (err: Object) => reject(err));
        });
    }
}

export default Server;