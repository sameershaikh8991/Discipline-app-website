import pkg from 'pg';
const { Client } = pkg;

const client = new Client({
  connectionString: process.env.DATABASE_URL, // Neon provides this
  ssl: { rejectUnauthorized: false }
});

client.connect();

export default client;
