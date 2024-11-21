const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const Server = http.createServer((req, res) => {
  const file = req.url === "/" ? "index.html" : req.url;
  const filePath = path.join(__dirname, "public", file);
  const extname = path.extname(filePath);
  const extValidas = [".html", ".css", ".js"];
  const validos = extValidas.find((item) => item == extname);

  if (!validos) return;

  fs.readFile(filePath, (err, content) => {
    if (err) throw err;
    res.end(content);
  });
});

Server.listen(5000, () => console.log('Servidor rodando...'));
