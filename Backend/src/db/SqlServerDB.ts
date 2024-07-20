import * as dotenv from 'dotenv';

dotenv.config();

import { ConnectionPool } from 'mssql';

class Database {
  private static instance: Database;
  private pool: ConnectionPool;

  private constructor() {
    console.log(process.env.DB_USER)
    this.pool = new ConnectionPool({
      user: process.env.DB_USER || 'your_username',
      password: process.env.DB_PASSWORD || 'your_password',
      server: process.env.DB_SERVER || 'your_server',
      database: process.env.DB_NAME || 'your_database',
      options: {
        encrypt: true, // Usa la encriptación si es necesario
        enableArithAbort: true, // Recomendado por Microsoft
        trustServerCertificate: true // Deshabilita la verificación del certificado
      }
    });

    this.pool.connect().then(() => {
      console.log('Connected to SQL Server');
    }).catch(err => {
      console.error('Database connection failed:', err);
    });
  }

  public static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }

  public getPool(): ConnectionPool {
    return this.pool;
  }
}

export default Database;
