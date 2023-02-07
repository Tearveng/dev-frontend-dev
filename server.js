const express = require('express');
const path = require('path');
require('dotenv').config();
const app = express();
console.log(process.env.SERVER_CLIENT_PORT);
app.use(express.static(path.join(__dirname, './dist')));
app.get('/*', (_, res) =>
  res.sendFile(path.join(__dirname, './dist/index.html')),
);

const PORT = process.env.SERVER_CLIENT_PORT || 3000;

app.listen(PORT, () =>
  console.log(`Server started on port http://localhost:${PORT}`),
);

//more resoure here: https://www.codedisciples.in/react-deployment.html
