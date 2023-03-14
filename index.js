//Import Modules
const express = require('express');
const app = express();
const cors = require("cors")
const PORT = process.env.PORT || 7070;
//Import router
const convemteamRouter = require('./router/conventeamRouter.js')

app.use(cors())
//Habilitando analise de HTTP Request
app.use(express.json());

app.use(convemteamRouter);

//Subindo servidor
app.listen(PORT, () => {
  console.log(`Server on in: http://localhost:${PORT}`);
});