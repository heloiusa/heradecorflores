const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());  // Para permitir requisições do frontend

// Dados fictícios de flores
const flores = [
  { id: 1, nome: "Rosas", descricao: "Rosas vermelhas para ocasiões especiais", preco: "€18,00" },
  { id: 2, nome: "Margaridas", descricao: "Margaridas brancas e simples", preco: "€15,00" },
  { id: 3, nome: "Orquídeas", descricao: "Orquídeas elegantes para decoração de luxo", preco: "€50,00" },
];

// Rota GET para enviar os dados de flores
app.get('/api/flores', (req, res) => {
  res.json(flores);
});

// Inicializa o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta http://localhost:${port}`);
});
