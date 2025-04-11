import express from 'express';
import cors from 'cors';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = 3000;

// Configurações para usar __dirname com ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  res.setHeader('X-Powered-By', 'Miqueias API');
  next();
});

// 👉 Servir arquivos estáticos (frontend)
app.use(express.static(path.join(__dirname, 'public')));

// Inicialização do banco de dados
let db;
const initDb = async () => {
  db = await open({
    filename: path.join(__dirname, 'database.db'),
    driver: sqlite3.Database
  });

  await db.exec(`CREATE TABLE IF NOT EXISTS mensagens (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    email TEXT NOT NULL,
    mensagem TEXT NOT NULL
  )`);
};

// Rota para criar uma nova mensagem
app.post('/api/mensagens', async (req, res) => {
  const { nome, email, mensagem } = req.body;

  if (!nome || !email || !mensagem) {
    return res.status(400).json({ sucesso: false, erro: 'Todos os campos são obrigatórios.' });
  }

  try {
    await db.run(
      `INSERT INTO mensagens (nome, email, mensagem) VALUES (?, ?, ?)`,
      [nome.trim(), email.trim(), mensagem.trim()]
    );
    res.status(201).json({ sucesso: true, mensagem: 'Mensagem enviada com sucesso.' });
  } catch (error) {
    console.error('Erro ao salvar mensagem:', error);
    res.status(500).json({ sucesso: false, erro: 'Erro interno ao salvar a mensagem.' });
  }
});

// Rota para listar todas as mensagens
app.get('/api/mensagens', async (req, res) => {
  try {
    const mensagens = await db.all(`SELECT * FROM mensagens ORDER BY id DESC`);
    res.json(mensagens);
  } catch (error) {
    console.error('Erro ao buscar mensagens:', error);
    res.status(500).json({ erro: 'Erro ao buscar mensagens.' });
  }
});

// Rota principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Inicializa servidor e banco de dados
app.listen(port, async () => {
  await initDb();
  console.log(`🚀 Servidor rodando em http://localhost:${port}`);
});
