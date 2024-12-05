const express = require('express');
const { engine } = require('express-handlebars');

const App = express();

App.engine('handlebars', engine());
App.set('view engine', 'handlebars');
App.set('views', './views');

App.get('/', (req, res) => {
  res.render('home');
});

App.listen(8080, () => console.log('Servidor rodando...'));