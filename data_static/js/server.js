const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs').promises;

app.get('/data/cart/:buy', async (req, res) => {
  const nombreArchivo = req.params.buy;
  const filePath = `./data/cart/${buy}.json`;

  try {
    const data = await fs.readFile(filePath, 'utf8');
    res.json(JSON.parse(data));
  } catch (error) {
    console.log('Error al leer el archivo JSON:', error);
    res.status(500).send('Error interno del servidor');
  }
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
