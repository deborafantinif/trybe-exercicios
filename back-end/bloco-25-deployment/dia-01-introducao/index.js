const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  return res.status(200).send("Está vivo!!!");
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Listening in port ${PORT}`));