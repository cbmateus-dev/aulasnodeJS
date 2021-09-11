const express = require ('express');
const app = express();
const route = require ('./route');

app.use(express.urlencoded({extended:true}));

app.use(route);


app.listen(3000, () => {
    console.log ('Acessar http://localhost:3000');
    console.log ('Servidor executando na porta 3000');
});