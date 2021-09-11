const express = require ('express');
const app = express();

app.use(
    express.urlencoded({extended:true}));



app.get('/', (req, res) => {
res.send(`
    <form action ="/" method="POST">
        Nome do Cliente: <input type = "text" name = "nome"><br>
        Idade do Cliente: <input type = "number" name = "idade"><br>
            <button> Enviar</button>
    </form>`
);
});

app.get('/testes/:idUsuarios?', (req,res)=>{
    console.log(req.params);
    res.send('Oi');
});

app.post('/', (req, res)=>{
    console.log(req.body);
    res.send(`O que você me enviou foi: ${req.body.nome}, Idade: ${req.body.idade}`);
});

app.listen(3000, () => {
    console.log ('Acessar http://localhost:3000');
    console.log ('Servidor executando na porta 3000');
});