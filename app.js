const express = require('express');
const { engine } = require('express-handlebars');
const Conexao = require('./db.js');

const App = express();

App.use('/css', express.static('./public/css'));

App.engine('handlebars', engine());
App.set('view engine', 'handlebars');
App.set('views', './views');

Conexao.connect();

App.get('/', (req, res) => {
  Conexao.query(
    'SELECT * FROM livros',
    (erro, retorno) => {
      if (erro) throw erro;
      res.render('home', { livros: retorno });
    }
  );
});

App.listen(8080, () => console.log('Servidor rodando...'));