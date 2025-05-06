const express = require('express');
const routes = require("./routes/rutas");
const app = express();

const port= 5023; 

app.use("/", routes);


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});