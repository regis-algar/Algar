const express = require('express');
const axios = require('axios');
require('dotenv').config();
const app = express();

app.use(express.json());

// Variável para armazenar o token
let token = 'valor_inicial_do_token';

// Rota para atualizar o token
app.post('/atualizar-token', (req, res) => {
  const novoToken = req.body.token;

  if (!novoToken) {
    return res.status(400).json({ mensagem: 'Token não fornecido' });
  }

  token = novoToken;
  console.log('Token atualizado:', token);
  res.status(200).json({ mensagem: 'Token atualizado com sucesso' });
});


app.post('/message-to-cora', async (req, res) => {
  try {
    const dadosRecebidos = req.body;
    console.log("Dados Recebidos", dadosRecebidos);

const url = process.env.API_FOR_REDIRECT || 'https://teams-endpoint-hml.1kusz6bgmkpj.br-sao.codeengine.appdomain.cloud';

    const resposta = await axios.post(url, dadosRecebidos, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    res.status(200).json(resposta.data);
  } catch (erro) {
    console.error('Erro na requisição:', erro);
    res.status(500).json({ mensagem: 'Erro interno do servidor' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});