const express = require ('express');
const app = express();

app.get('/', (req, res) => {
res.send(`
    <form action ="/" method="POST">
        Nome do Cliente: <input type = "text" name = "nome">
            <button> Olá Mundoo</button>
    </form>`


);
});

app.get ('/contato', (req, res)  =>{
    res.send('Obrigado por entrar em contato com a gente');
});

app.post('/', (req, res)=>{
    res.send('Formulario Recebido');
});

app.listen(3000, () => {
    console.log ('Acessar http://localhost:3000');
    console.log ('Servidor executando na porta 3000');
});